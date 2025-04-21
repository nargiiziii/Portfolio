import React from 'react'
import './PortfolioItem.css'

const PortfolioItem = ({name, desc, image}) => {
  return (
    <>
    <div className='porfolio-item'>
         <img src={image} alt="image" />
         <div className="img-overlay">+</div> {}
        <p className='name'>{name}</p>
        <p className='desc'>{desc}</p>
    </div>
    </>
  )
}

export default PortfolioItem