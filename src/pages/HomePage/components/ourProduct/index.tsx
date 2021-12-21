import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
interface Props {}

const OurProduct = (props: Props) => {
	return (
		<section className='ftco-section'>
			<div className='container'>
				<div className='row justify-content-center mb-3 pb-3'>
					<div
						className='
							col-md-12
							heading-section
							text-center
							ftco-animate
						'>
						<h1 className='subheading'>Featured</h1>
						<h2 className='mb-4'>Service</h2>
						<p>Card from around the world</p>
					</div>
				</div>
			</div>
			<div className='container'>
				<div className='cus-list pb-5 '>
					<Link to='/about' className='border-2 rounded-sm'>
						<div className='cus-item'>
							<img
								src='https://chiasevaytien.com/pictures/images/09-2021/08/the-tin-dung-den.jpg'
								alt=''
								className='cus-image'
							/>
							<h3 className='cus-title'>ABOUT US</h3>
							<p className='cus-desc'>
								Quick release procedure, convenient payment worldwide with many
								attractive incentive programs for cardholders.{' '}
							</p>
						</div>
					</Link>
					<Link to='/transfer' className='border-2 rounded-sm'>
						<div className='cus-item'>
							<img
								src='https://www.ncb-bank.vn/website/var/tmp/image-thumbnails/0/5291/thumb__thumbproduct/Tumblr_Visa-Woman-Credit-card.jpeg'
								alt=''
								className='cus-image'
							/>
							<h3 className='cus-title'>CARD PAYMENT SERVICE </h3>
							<p className='cus-desc'>
								Banking application, implementing financial transactions,
								payment with simple and convenient operation.{' '}
							</p>
						</div>
					</Link>
					<Link to='/payin' className='border-2 rounded-sm'>
						<div className='cus-item'>
							<img
								src='https://lamchutaichinh.vn/wp-content/uploads/2021/04/the-tin-dung-ngan-hang-hsbc.jpeg'
								alt=''
								className='cus-image'
							/>
							<h3 className='cus-title'>PAY IN </h3>
							<p className='cus-desc'>
								PayPal never shares your full details and monitors for any
								activity. We’ll send you a receipt for every payment, so you can
								keep track of your spending.
							</p>
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default OurProduct;
