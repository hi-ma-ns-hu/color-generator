import React from 'react'

const Form = ({ color, handleChange, handleSubmit }) => {

  return (
    <>
      <form onSubmit={ handleSubmit } className='form'>
        <input type='text' value={ color } placeholder='#00ffff/rgb(0,255,255)/aqua'
          onChange={ handleChange } />
        <button type='submit' className='btn'>Generate color</button>
      </form>
    </>
  )
}

export default Form
