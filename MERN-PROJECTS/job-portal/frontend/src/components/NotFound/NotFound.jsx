import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
        <section className='page notfound'>
          <div className="content">
            <img src="/notfound.png" alt="notfound" />
            <button><Link to={'/'}>RETURN TO HOME PAGE</Link></button>
          </div>
        </section>
    </>
  )
}


export default NotFound