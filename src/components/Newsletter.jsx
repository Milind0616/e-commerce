import React from 'react'

const Newsletter = () => {
  return (
    <section className='news'>
        <div className='newtext'>
            <h4>Sign Up For Newsletters</h4>
            <p>Got E-mail updates about our latest shop and <span>special offers.</span></p>
        </div>

        <div className='form'>
            <input type="text" placeholder='Your email address' />
            <button className='normal'>Sign Up</button>
        </div>
    </section>
  )
}

export default Newsletter
