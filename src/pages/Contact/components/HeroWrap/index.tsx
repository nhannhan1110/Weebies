import React from 'react';
import contact from '../../../../images/contact.jpg';

interface Props {}

const HeroWrap = (props: Props) => {
	return (
		<div
			className='hero-wrap hero-bread'
			style={{ backgroundImage: `url(${contact})` }}
		>
			<div className='container'>
				<div className='row no-gutters slider-text align-items-center justify-content-center'>
					<div className='col-md-9 ftco-animate text-center'>
						<p className='breadcrumbs'>
							<span>Contact us</span>
						</p>
						<h1 className='mb-0 bread'>Contact us</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroWrap;
