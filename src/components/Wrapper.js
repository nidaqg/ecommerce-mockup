import React from 'react'
import logo from '../assets/logo.png';

function Wrapper(props) {
    return (
        <>
          <section className="container col-xl-10 col-xxl-8 py-5 text-center">
        <img
          src={logo}
          className="img-fluid"
          alt="logo"
        />
        
      </section>   
             {props.children}

        </>
    )
}

export default Wrapper
