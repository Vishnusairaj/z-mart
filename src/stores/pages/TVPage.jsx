import React from 'react'
import Navbar from '../components/Navbar'
import { tvData } from '../data/tv'
import { Link } from 'react-router-dom'

const TVPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
        {
            tvData.map((item)=>{
                return(
                    <div >
                         <Link to={`/tv/${item.id}`}>
                       <div className='pageImg'>
                            <img src={item.image} alt=''/>
                        </div>
                       </Link>
                        
                        <div className="proModel">
                            {item.company}{item.model}
                        </div>
                    </div>
                )
            })
        }
      
    </div>
    </>
  )
}

export default TVPage
