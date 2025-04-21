import React from 'react'
import './Service.css'

const Service = ({icon, name, desc}) => {
  return (
    <div className='service'>
        <p>{icon}</p>
        <h2>{name}</h2>
        <h3>{desc}</h3>
    </div>
  )
}

export default Service