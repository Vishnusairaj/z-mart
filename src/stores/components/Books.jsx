import React from 'react'

import { booksData } from '../data/books'

const Books = () => {
    const firstFiveImages=booksData.slice(0,5)
  return (
    <div>
        <>
        <div className='proTitle'>
        <h2>Books</h2>
        
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
      
    </div>
  )
}

export default Books
