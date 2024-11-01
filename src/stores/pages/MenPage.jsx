import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { menData } from '../data/men'
import { Link } from 'react-router-dom'

const MenPage = () => {
    const[selectedProduct,setSelectedProduct] = useState([])
    const companyhandler=(Shirt)=>{
        if(selectedProduct.includes(Shirt)){
            setSelectedProduct(selectedProduct.filter(item=>item !==Shirt))

        }else{
            setSelectedProduct([...selectedProduct,Shirt])
        }
    }
    const filteredProduct=selectedProduct.length ===0?
        menData:menData.filter((Apple)=>selectedProduct.includes(Apple.brand))
  return (
    <>
     <Navbar/>
    <div className="fullpage">
        <div className="pro-selected">
            {menData.map((men)=>{
                return(
                    <div className='pro-input'>
                        <label>
                            <input type='checkbox'
                            checked={selectedProduct.includes(men.brand)}
                            onChange={()=>companyhandler(men.brand)}
                             />
                             {men.brand}
                        </label>
                    </div>

                )
            })}
        </div>
        <div className='pageSection'>
            {
                filteredProduct.map((item)=>{
                    return(
                        <div >
                            <Link to={`/men/${item.id}`}>
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
    </div>
    </>
  )
}

export default MenPage
