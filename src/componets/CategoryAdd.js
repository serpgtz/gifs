import React, { useState } from 'react'
import PropTypes from "prop-types"
function CategoryAdd({setCategories}) {

    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
       

    }

    const handleSumit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2 ){
            setCategories(categ => [inputValue,...categ])
            setInputValue("")
        }
       
    }

  return (
    <form onSubmit={handleSumit}>
        <input 
            type='text'
            value={inputValue}
            onChange={handleInputChange }
        />
  <button type="submit">Buscar</button>
    </form>
  )
}

CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired,
  };

export default CategoryAdd
