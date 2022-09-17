import React from 'react'

function VideoCard({vid}) {
    console.log(vid.url)
  return (
    <div className='videoCard'>
        <iframe width="560" height="315" className="ytwindow" src={vid.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p className="videoDescription">{vid.description}</p>
    </div>
  )
}

export default VideoCard