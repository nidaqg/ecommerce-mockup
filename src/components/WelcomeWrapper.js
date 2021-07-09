import React from 'react'
import logo from '../assets/logo.png';
import "../assets/style.css";

function WelcomeWrapper(props) {

    return (
        <>
           <section className="container col-xl-10 col-xxl-8 px-4 py-5 text-center">
        <img
          src={logo}
          className="img-fluid fade-in"
          alt="logo"
        />
        <section className="row align-items-center justify-content-center g-5 py-5">
          <section className="col-lg-7 text-center justify-content-center text-lg-start">
                <section>
                  <h1 className="display-4 fw-bold lh-1 mb-3 text-center">
                     BlueDot Designs
                  </h1>
                  <p className="fs-4 subtext justify-content-center text-center">
                   Expect more from your clothes
                  </p>
                </section>
          </section>
          <section>
            <button type="button" className="btn localBtn btn-dark btn-lg" onClick={props.handleOnClick}>Shop Now</button>
          </section>
        </section>
      </section> 
        </>
    )
}

export default WelcomeWrapper
