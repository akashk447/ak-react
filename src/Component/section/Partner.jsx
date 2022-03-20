import React from 'react';
import image1 from '../../images/about/1.png';
import image2 from '../../images/about/2.png';
import image3 from '../../images/about/3.png';


const Partner=()=>{
    return(
      <>
            <section className="section clients">
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-lg-7">
				<div className="section-title text-center">
					<h2>Partners who support us</h2>
					<div className="divider mx-auto my-4"></div>
					<p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
				</div>
			</div>
		</div>
	</div>

	<div className="container">
		<div className="row clients-logo justify-content-center">
			<div className="col-lg-2">
				<div className="client-thumb">
					<img src={image1} alt="" className="img-fluid"/>
				</div>
			</div>
			<div className="col-lg-2">
				<div className="client-thumb">
					<img src={image2} alt="" className="img-fluid"/>
				</div>
			</div>
			<div className="col-lg-2">
				<div className="client-thumb">
					<img src={image3} alt="" className="img-fluid"/>
				</div>
			</div>
			
		</div>
	</div>
</section>
      </>
    );
}
export default Partner;