import React from 'react'
import { womanData } from '../data/woman'

const Women = () => {
    const firstFiveImages=womanData.slice(0,5)
  return (
   <>
   <div className='proTitle'>
   <h2>Women</h2>
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

export default Women
