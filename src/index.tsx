import * as React from 'react'
import styles from './styles.module.css'
import { useEffect, useRef, useState } from 'react'

interface CustomScrollbarProps {
  children: React.ReactNode
  height?: number
  thumbColor?: string
  thumbWidth?: number
  trackColor?: string
  trackWidth?: number
  isShowTrack?: boolean
  right?: number
  className?: string
}

export const CustomScrollbar = ({
  children,
  height = 300,
  thumbColor = '#888',
  thumbWidth = 8,
  trackColor = '#e0e0e0',
  trackWidth = 8 + 2,
  isShowTrack = true,
  right = 0,
  className = ''
}: CustomScrollbarProps) => {
  // Create ref from div element
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [thumbHeight, setThumbHeight] = useState(50)
  const [visibleScroll, setVisibleScroll] = useState(false)

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollTop = scrollContainerRef.current.scrollTop
      const scrollHeight =
        scrollContainerRef.current.scrollHeight -
        scrollContainerRef.current.clientHeight
      const thumbPosition =
        (scrollTop / scrollHeight) *
        (scrollContainerRef.current.clientHeight - thumbHeight)
      setScrollPosition(thumbPosition)
    }
  }

  useEffect(() => {
    if (scrollContainerRef.current) {
      const visibleRatio =
        scrollContainerRef.current.clientHeight /
        scrollContainerRef.current.scrollHeight
      setThumbHeight(visibleRatio * scrollContainerRef.current.clientHeight)
      if (thumbHeight >= scrollContainerRef.current.clientHeight) {
        setVisibleScroll(false)
      }
    }
  }, [children])

  return (
    <div className={`${styles.container} ${className}`} style={{ height }}>
      <div className={styles.outerScrollContainer}>
        <div
          className={styles.scrollContainer}
          onScroll={handleScroll}
          ref={scrollContainerRef}
        >
          {children}
        </div>
      </div>
      <svg
        className={styles.svgScrollbar}
        width={trackWidth}
        height={scrollContainerRef?.current?.clientHeight ?? 0}
        style={{ right, visibility: visibleScroll ? 'visible' : 'hidden' }}
      >
        {/* Track */}
        {
          // Show track when isShowTrack is true
          isShowTrack && (
            <rect
              x={0}
              y={0}
              width={trackWidth}
              height='100%'
              rx={trackWidth / 2}
              ry={trackWidth / 2}
              fill={trackColor}
            />
          )
        }
        {/* Thumb */}
        <rect
          x={Math.floor((trackWidth - thumbWidth) / 2)}
          y={scrollPosition}
          width={thumbWidth}
          height={`${thumbHeight}`}
          rx={thumbWidth / 2}
          ry={thumbWidth / 2}
          fill={thumbColor}
        />
      </svg>
    </div>
  )
}
