import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { CustomScrollbar } from './index'

test('handles vertical scroll', () => {
  const { container } = render(
    <CustomScrollbar height={300}>
      <div style={{ height: '1000px' }}>Scrollable Content</div>
    </CustomScrollbar>
  )
  const scrollContainer = container.querySelector('.scrollContainer')
  fireEvent.scroll(scrollContainer, { target: { scrollTop: 100 } })
  expect(scrollContainer.scrollTop).toBe(100)
})
