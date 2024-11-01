import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { kitchenData } from '../data/kitchen'
import { Link } from 'react-router-dom'

const Kitchen = () => {
    const[selectedProduct,setSelectedProduct] = useState([])

    const companyhandler=(mango)=>{
        if(selectedProduct.includes(mango)){
            setSelectedProduct(selectedProduct.filter(item=>item !==mango))
        }else{
            setSelectedProduct([...selectedProduct,mango])
        }
        
    }
    const filteredProduct = selectedProduct.length ===0?
        kitchenData: kitchenData.filter((orange)=>selectedProduct.includes(orange.brand))
  return (
    <>
    <Navbar/>
    <div className="fullpage">
    <div className="pro-selected">
                {kitchenData.map((phone)=>{
                return(
                <div className='pro-input'>
                    <label>
                        <input type='checkbox'
                        checked={selectedProduct.includes(phone.brand)}
                        onChange={()=>companyhandler(phone.brand)}
                        />
                    {phone.brand}
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
                            <Link to={`/kitchen/${item.id}`}>
                            <div className='pageImg'>
                                <img src={item.image} alt=''/>
                            </div></Link>
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

export default Kitchen
