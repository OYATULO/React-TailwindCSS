import React from 'react'

const Button = ({styles,Text}) => {
  return (
    <button  className={` w-4/12 p-4 mt-6 ${styles}`}>{Text}</button>
  )
}

export default Button