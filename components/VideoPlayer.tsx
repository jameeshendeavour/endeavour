import React from 'react'

const VideoPlayer = ({url, type}: {url: string, type: string}) => {
  return (
    <div>
      <video
        controls
        className="w-full h-full object-cover rounded-md"
      >
        <source src={url} type={type} />
      </video>
    </div>
  )
}

export default VideoPlayer