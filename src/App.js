import React, { useState } from 'react';
import Values from 'values.js';
import Form from './Form';
import SingleColor from './SingleColor';


function App() {

  // deals with each single color
  const [color, setColor] = useState('')
  // keeps lists of all the shades of above color
  const [colorList, setColorList] = useState(new Values('#a52a2a').all(1))

  const handleChange = (e) => {
    setColor(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let newColor = new Values(color).all(1)
      setColorList(newColor)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='App'>
        <section className='container'>
          <h1>Generate different shades of your favourite color</h1>
        </section>

        {/* input form */ }
        <Form color={ color } handleChange={ handleChange } handleSubmit={ handleSubmit } />

        <section className='display'>
          {/* maps over colorList and displays each color component */ }
          { colorList.map((elem, index) => {
            return <SingleColor elem={ elem } key={ index } index={ index } />
          }) }
        </section>
      </div>
    </>
  );
}

export default App;
