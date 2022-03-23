import React from 'react'

const Form = ({ color, handleChange, handleSubmit }) => {

  return (
    <>
      <form onSubmit={ handleSubmit } className='form'>
        <input type='text' value={ color } placeholder='#a52a2a/rgb(165,42,42)/brown'
          onChange={ handleChange } />
        <button type='submit' className='btn'>Generate color</button>
      </form>
    </>
  )
}

export default Form
