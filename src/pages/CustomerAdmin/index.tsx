import dayjs from 'dayjs';
import React from 'react';
import { getAllUserApi } from '../../apis/user/getAllUser.api';
import bg1 from '../../images/bg_1.jpg';
import { hideTextIdCard } from '../../utils';

interface Props {}

const CustomerAdmin = (props: Props) => {
	const [customers, setCustomers] = React.useState([]);
	const status = ['Transfers', 'Received Money', 'Recharge'];
	const historyApi = async () => {
		const results = await getAllUserApi();
		console.log(
			`LHA:  ===> file: index.tsx ===> line 14 ===> results`,
			results
		);
		setCustomers(results.data);
	};

	React.useEffect(() => {
		historyApi();
	}, []);
	return (
		<main>
			<section id='home-section' className='hero'>
				<div className='home-slider owl-carousel'>
					<div>
						<div
							className='slider-item'
							style={{ backgroundImage: `url(${bg1})` }}>
							<div className='overlay'></div>
							<div className='container'>
								<div
									className='
								row
								slider-text
								justify-content-center
								align-items-center
							'
									data-scrollax-parent='true'>
									<div className='col-md-12 text-center'>
										<h1 className='mb-2'>Weebies</h1>
										<h2 className='subheading mb-4'>Card Payment Service</h2>
										<h3 className='subheading_1 mb-4'>
											Weebies have been serving million of card holders and over
											6,000 merchants
										</h3>
										<p></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className='container px-[50px] mt-5'>
				<p className='text-3xl'>History Transaction</p>
				<div className='flex flex-col mt-5'>
					<div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
						<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
							<div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
								<table className='min-w-full divide-y divide-gray-200'>
									<thead className='bg-gray-50'>
										<tr>
											<th
												scope='col'
												className='text-center px-6 py-3 text-base font-medium text-gray-500 uppercase tracking-wider'>
												Name
											</th>
											<th
												scope='col'
												className='text-center px-6 py-3 text-base font-medium text-gray-500 uppercase tracking-wider'>
												Email
											</th>
											<th
												scope='col'
												className=' text-center px-6 py-3 text-base font-medium text-gray-500 uppercase tracking-wider'>
												Phone
											</th>
											<th
												scope='col'
												className=' text-center px-6 py-3 text-base font-medium text-gray-500 uppercase tracking-wider'>
												Birthday
											</th>
											<th
												scope='col'
												className=' text-center px-6 py-3 text-base font-medium text-gray-500 uppercase tracking-wider'>
												Career
											</th>
										</tr>
									</thead>
									<tbody className='bg-white divide-y divide-gray-200'>
										{customers.map((item: any, index) => (
											<tr key={index}>
												<td className='px-6 py-4 whitespace-nowrap'>
													<div className='flex items-center'>
														<div className='flex-shrink-0 h-10 w-10 rounded-full border-none'>
															<img
																className='h-10 w-10 rounded-full bg-gray-400'
																src={item.avatar}
																// alt='avatar'
															/>
														</div>
														<div className='ml-4'>
															<div className='text-base font-medium text-gray-900'>
																{item.firstName} {item.lastName}
															</div>
															{/* <div className='text-base text-gray-500'>
																{item.identityCardNumber}
															</div> */}
														</div>
													</div>
												</td>
												<td className='px-6 py-4 whitespace-nowrap'>
													<div className='text-base text-gray-900 text-center'>
														{item.email}
													</div>
												</td>
												<td className='px-9 py-4 whitespace-nowrap'>
													<div className='text-base text-gray-900 px-10 text-center' >
														{item.phone}
													</div>
												</td>
												<td className='px-6 py-4 whitespace-nowrap text-center'>
													{dayjs(item.birthday).format('DD/MM/YYYY')}
												</td>
												<td className='px-6 py-4 whitespace-nowrap text-base text-gray-500 text-center'>
													<span className='px-4 py-2 inline-flex text-base leading-5 font-semibold rounded-full bg-green-100 text-green-800 '>
														{item.career}
													</span>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default CustomerAdmin;
