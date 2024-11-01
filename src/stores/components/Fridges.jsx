import React from 'react'
import { fridgeData } from '../data/fridge'

const Fridges = () => {
    const firstFiveImages=fridgeData.slice(0,5)
  return (
   <>
   <div className='proTitle'>
   <h2>Fridges</h2>
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

export default Fridges
