import React from 'react'

const Title = ({ text }) => {
  return (
    <div className='title'>
        <h2>{ text || 'Title Default' }</h2>
        <div className="title-underline"></div>
    </div>
  )
}

export default Title