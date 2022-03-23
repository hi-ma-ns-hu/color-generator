import React, { useState, useEffect } from 'react'

const SingleColor = ({ elem, index }) => {

  const [alert, setAlert] = useState(false)

  // generates alert message when clicked
  const handleClick = (val) => {
    setAlert(true)
    navigator.clipboard.writeText(val)
  }


  // deals with timeout to remove alert message
  useEffect(() => {
    let timeout = setTimeout(() => {
      setAlert(false)
    }, 3000);

    return () => {
      clearTimeout(timeout)
    }
  }, [alert])



  return (
    <>
      <article className={ `color ${ index > 100 && 'color-bright' }` } style={ { backgroundColor: `rgb(${ elem.rgb })` } } onClick={ () => handleClick(`#${ elem.hex }`) }>
        <p>{ elem.weight }%</p>
        <p>{ `#${ elem.hex }` }</p>
        <p>{ `rgb(${ elem.rgb })` }</p>
        { alert && <p>Copied to clipboard</p> }
      </article>
    </>
  )
}

export default SingleColor
