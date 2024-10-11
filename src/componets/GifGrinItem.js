import React from 'react'

export default function GifGrinItem({id,title,url}) {

    // console.log({id, title, url})
  return (
    <div className='animate__heartBeat'>
        <img src={url} alt={title} width="300"/>
        <p>{title}</p>
    </div>
  )
}
