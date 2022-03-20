import React,{useState,useEffect} from 'react'

import image1 from "../../images/about/img-3.jpg"
import Loader from './Loader';

const Contact=()=>{
    // const [isloading,setLoading]=useState(true);
    // const [interval,setInterval]=useState(0);
    // const intv =()=>{
    //     setInterval(3000);
    // }
    // useEffect(()=>{
    //     setInterval(5000);
    //     setTimeout(() => {
    //       setLoading(false)
    //     }, interval);
    // },[]);

    return(
      <>
      {/* {isloading?<Loader/>: */}
      <section class="section appoinment">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-lg-6 ">
				<div class="appoinment-content">
					<img src={image1} alt="" class="img-fluid"/>
					
				</div>
			</div>
			<div class="col-lg-6 col-md-10 ">
				<div class="appoinment-wrap mt-2 mt-lg-0">
					<h2 class="mb-2 title-color">Book Your Services . </h2>
					{/* <p class="mb-4">Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit . Iste dolorum atque similique praesentium soluta.</p> */}
					     <form id="#" class="appoinment-form" method="post" action="#">
                    <div class="row">
                         <div class="col-lg-6">
                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1">
                                  <option>Static Web Design</option>
                                  <option>Web App Development</option>
                                  <option>CMS Application</option>
                                  <option>Graphics Design</option>
                                  <option>Logo Design</option>
                                  <option>Banner Design</option>
                                  <option>SEO Marketting</option>
                                  <option>Others</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect2">
                                  <option>Mode of Business</option>
                                  <option>Individual</option>
                                  <option>Commercial</option>
                                  
                                </select>
                            </div>
                        </div>

                         <div class="col-lg-6">
                            <div class="form-group">
                                <input name="name" id="name" type="text" class="form-control" placeholder="Full Name"/>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="form-group">
                                <input name="phone" id="phone" type="text" class="form-control" placeholder="Phone Number"/>
                            </div>
                        </div>
                    </div>
                    <div class="form-group-2 mb-4">
                        <textarea name="message" id="message" class="form-control" rows="6" placeholder="Your Message"></textarea>
                    </div>

                    <a class="btn btn-main btn-round-full" href="appoinment.html" >Contact Us <i class="icofont-simple-right ml-2  "></i></a>
                </form>
            </div>
			</div>
		</div>
	</div>
</section>
}
      </>
    );
}
export default Contact;