import React from 'react'
import Navbar from '../components/Navbar'
import { booksData } from '../data/books'
import { Link } from 'react-router-dom'

const BooksPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
        {
            booksData.map((item)=>{
                return(
                    <div >
                        <Link to={`/book/${item.id}`}>
                        <div className='pageImg'>
                            <img src={item.image} alt=''/>
                        </div>
                        </Link>
                        <div className="proModel">
                            {item.title}{item.author}
                        </div>
                    </div>
                )
            })
        }
      
    </div>
    </>
  )
}

export default BooksPage
