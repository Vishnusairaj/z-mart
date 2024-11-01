import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { acData } from '../data/ac'
import { Link } from 'react-router-dom'

const ACPages = () => {
    const[selectedProduct,setSelectedProduct] = useState([])

    const companyhandler=(mango)=>{
        if(selectedProduct.includes(mango)){
            setSelectedProduct(selectedProduct.filter(item=>item !==mango))
        }else{
            setSelectedProduct([...selectedProduct,mango])
        }
        
    }
    const filteredProduct = selectedProduct.length ===0?
        acData: acData.filter((orange)=>selectedProduct.includes(orange.company))
  return (
   <>
   <Navbar/>
    <div className="fullpage">
        <div className="pro-selected">
            {acData.map((phone)=>{
            return(
            <div className='pro-input'>
                <label>
                    <input type='checkbox'
                    checked={selectedProduct.includes(phone.company)}
                    onChange={()=>companyhandler(phone.company)}
                    />
                {phone.company}
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
                        <Link to={`/ac/${item.id}`}>
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

export default ACPages
