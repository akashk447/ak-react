import React from 'react';
const Banner=()=>{
    return(
      <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-xl-7">
            <div className="block">
              <div className="divider mb-3"></div>
              <span className="text-uppercase text-sm letter-spacing text-light">Total Web App Solution</span>
              <h1 className="mb-3 mt-3 text-light black">Your most trusted Web Developer</h1>
              
              <p className="mb-4 pr-5 text-light black" style={{"textAlign":"justify"}}>Our evolution over 10 years combines top-notch experience in web design, web development, mobile apps, and full service e-commerce solutions. . We create smart and responsive designs, delivering state-of-the-art designing. Our innovative designers work in a creative environment, helping them to overcome any competition.</p>
              {/* <div className="btn-container ">
                <a href="appoinment.html" target="_blank" className="btn btn-main-2 btn-icon btn-round-full">Make appoinment <i className="icofont-simple-right ml-2  "></i></a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}
export default Banner;