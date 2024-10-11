import React, { useState } from 'react'
import CategoryAdd from "./CategoryAdd"
import GiftGrid from './GiftGrid'


function GifExpertApp(props) {

    let categorias = []

    const [categories, setCategories] = useState(categorias)



  return (
    <>
        <h2>GifExpertApp</h2>
            <CategoryAdd setCategories={setCategories}
                         />
        <hr/>


        <ol>
            {
                categories.map(categorie => (
                  <GiftGrid
                  key={categorie} 
                  categorie = {categorie} />
                ))
            }
        </ol>
    </>
  )
}


export default GifExpertApp

