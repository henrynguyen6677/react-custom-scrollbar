import React, { useRef, useEffect, useState } from 'react'
import styles from './CustomScrollbar.module.css'

const CustomScrollbar = ({
  children,
  height = 300,
  thumbColor = '#888',
  thumbWidth = 8,
  trackColor = '#e0e0e0',
  trackWidth = 8 + 2,
  isShowTrack = true,
  right = 0,
  className = ''
}) => {
  const scrollContainerRef = useRef(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [thumbHeight, setThumbHeight] = useState(50)

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
        height={
          scrollContainerRef.current
            ? scrollContainerRef.current.clientHeight
            : 0
        }
        style={{ right }}
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
          height={thumbHeight}
          rx={thumbWidth / 2}
          ry={thumbWidth / 2}
          fill={thumbColor}
        />
      </svg>
    </div>
  )
}

export default CustomScrollbar
