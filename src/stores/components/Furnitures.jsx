
import React from 'react'
import { furnitureData } from '../data/furniture'

const Furnitures = () => {
    const firstFiveImages=furnitureData.slice(0,5)
  return (
    <>
    <div className='proTitle'>
    <h2>Furnitures</h2>
    <div className='proSection'>
     {
        firstFiveImages.map((item)=>{
            return(
                <div className='imgBox'>
                    <img className='proImage' src={item.image} alt=""/>
                </div>

            )
        })
     }
    </div>
    </div>
    </>
  )
}

export default Furnitures
