import React from 'react';
import img1 from '../../images/about/img-1.jpg';
import img2 from '../../images/about/img-2.jpg';
import img3 from '../../images/about/img-3.jpg';


const Cta=()=>{
    return(
        <section className="cta-section ">
	<div className="container">
		<div className="cta position-relative">
			<div className="row">
				<div className="col-lg-3 col-md-6 col-sm-6">
					<div className="counter-stat">
						<i className="icofont-doctor"></i>
						<span className="h3">58</span>k
						<p>Happy People</p>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 col-sm-6">
					<div className="counter-stat">
						<i className="icofont-flag"></i>
						<span className="h3">700</span>+
						<p>Surgery Comepleted</p>
					</div>
				</div>
				
				<div className="col-lg-3 col-md-6 col-sm-6">
					<div className="counter-stat">
						<i className="icofont-badge"></i>
						<span className="h3">40</span>+
						<p>Expert Doctors</p>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 col-sm-6">
					<div className="counter-stat">
						<i className="icofont-globe"></i>
						<span className="h3">20</span>
						<p>Worldwide Branch</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
    );
}
export default Cta;