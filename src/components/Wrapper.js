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
        <section className="row align-items-center justify-content-center g-5">
          <section className="col-lg-7 text-center justify-content-center text-lg-start">
                <section>
                  <p className="fs-4 subtext justify-content-center text-center">
                   
                  </p>
                </section>
          </section>
        </section>
      </section>   
             {props.children}

        </>
    )
}

export default Wrapper
