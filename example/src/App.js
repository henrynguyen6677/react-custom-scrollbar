import React from 'react'

import CustomScrollbar from 'react-mini-scrollbar'
import 'react-mini-scrollbar/dist/index.css'

const App = () => {
  return (
    <div
      style={{
        background: '#f0f0f0'
      }}
    >
      <CustomScrollbar
        right={2}
        thumbColor='#f00'
        trackColor='#0f0'
        thumbWidth={10}
        trackWidth={10}
        height={300}
        isShowTrack={true}
        className='custom-scrollbar'
      >
        <div style={{ height: '1000px', width: '100%', background: '#ccc' }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ultricies, nunc nec vehicula ultricies, nunc nec vehicula ultricies,
            nunc nec vehicula
          </p>
        </div>
      </CustomScrollbar>
    </div>
  )
}

export default App
