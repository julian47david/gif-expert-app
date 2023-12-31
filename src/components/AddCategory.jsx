import React, { useState } from "react";
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('')

  const handleChange = (e) => {

    setInputValue(e.target.value);

  }
  
  const handleSubmit = (e) => {
    e.preventDefault()

    if (inputValue.trim().length > 2) {

      setCategories( categ => [inputValue, ...categ])

      setInputValue('')
    }

  }

  return (
    <form>
      <input 
        type="text" 
        value={inputValue}
        onChange={handleChange}
      />
      <br />
      <button type="submit" onClick={handleSubmit} >Buscar</button>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory;
