
import React from 'react'
import useFetchGifs from '../hook/useFetchGifs'
import GifGrinItem from './GifGrinItem';
// import { getGifs } from '../helpers/getGifs';

export default function GiftGrid({ categorie }) {



const {data:images, loading} = useFetchGifs( categorie );
 


  return (
    <div className='card-grid'>
      <h3 className='animate__wobble'>{ categorie }</h3>
      { loading && <p className='animate__heartBeat'>Loadinding...</p>}
    
      
          {
           images.map( (img) => (
            <GifGrinItem
            key={img.id} 
            {...img}/>
           ))
          }
      
    </div>
  )
}
