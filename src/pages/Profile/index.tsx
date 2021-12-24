import dayjs from 'dayjs';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { updateAvatarApi } from '../../apis/auths/updateAvatar.api';
import { getCardService } from '../../apis/user/getCardBank.api';
import CardBank from '../../components/CardBank';
import {
	changeUser,
	setCardBank,
	setIndexCard
} from '../../features/auths/slice';
import {
	indexCard,
	selectCurrentUser
} from '../../features/auths/slice/selector';
import { getCurrentUserAsync } from '../../features/auths/slice/thunk';
import { notifyError, notifySuccess } from '../../utils/notify';
import ModalCard from './components/ModalCard';
import ModalChangePass from './components/ModalChangePass';
import ModalChangeInfo from './components/ModalChangInfo';
import ModalCreateCard from './components/ModalCreateCard';
import './style.scss';

interface ProfilePageProps {}

export const ProfilePage = (props: ProfilePageProps) => {
	const [open, setOpen] = useState(false);
	const dispatch = useDispatch();
	const refAvatar = useRef<HTMLImageElement>(null);
	const handdleOpen = () => {
		setOpen(true);
	};
	const handdleCancel = () => {
		setOpen(false);
	};

	const [open2, setOpen2] = useState(false);
	const handdleOpen2 = () => {
		setOpen2(true);
	};
	const handdleCancel2 = () => {
		setOpen2(false);
	};

	const [open3, setOpen3] = useState(false);
	const handdleOpen3 = (index: number) => {
		dispatch(setIndexCard(index));
		setOpen3(true);
	};
	const handdleCancel3 = () => {
		setOpen3(false);
	};

	const [open4, setOpen4] = useState(false);
	const handdleOpen4 = () => {
		setOpen4(true);
	};
	const handdleCancel4 = () => {
		setOpen4(false);
	};

	const user = useSelector(selectCurrentUser);
	const onChangeAvatar = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files?.length > 0) {
			const file = e.target.files[0];
			const result = await updateAvatarApi({ avatar: file });
			console.log(result);
			if (result.statusCode === 200) {
				notifySuccess('Update Avatar');
				dispatch(changeUser(result.data));
			}
		}
	};

	const cardsAsync = async () => {
		const result = await getCardService();
		dispatch(setCardBank(result.data));
	};

	React.useEffect(() => {
		cardsAsync();
	}, []);
	console.log('User', user);
	return (
		<div className='profilePage container'>
			<div className='profilePage-wrapper'>
				<div className='profilePage-wrapper-headerBackground relative'>
					<label htmlFor='avatar'>
						<div className='profilePage-wrapper-avatar'>
							<img src={user?.user.avatar} alt='Avatar' ref={refAvatar} />
						</div>
					</label>
					<input
						type='file'
						name='avatar'
						id='avatar'
						hidden
						onChange={onChangeAvatar}
					/>
				</div>

				<div className='profilePage-wrapper-bottomBackground  mt-12'>
					<div className='signInPage-form-content'>
						<h3 className='text-2xl'>
							<span style={{ color: '#00ACB7' }}>
								{user?.user.firstName} {user?.user.lastName}
							</span>
						</h3>

						<h3 className='text-2xl'>
							Phone <span style={{ color: '#00ACB7' }}>{user?.user.phone}</span>
						</h3>

						<button
							onClick={handdleOpen4}
							id='createCard'
							className='btn btn-block login-btn mb-2 mt-4'
							type='submit'
							style={{
								backgroundColor: '#00ACB7',
								color: 'white'
							}}>
							Create Card
						</button>
						{/* <button
							onClick={handdleOpen}
							id='changeinfo'
							className='btn btn-block login-btn mb-2'
							type='submit'
							style={{
								backgroundColor: '#00ACB7',
								color: 'white'
							}}>
							Change Info
						</button>
						<button
							onClick={handdleOpen2}
							id='changpassword'
							className='btn btn-block login-btn mb-2'
							type='submit'
							style={{
								backgroundColor: '#00ACB7',
								color: 'white'
							}}>
							Change Password
						</button> */}
					</div>
					<ModalChangeInfo open={open} cancel={handdleCancel} />
					<ModalChangePass open2={open2} cancel2={handdleCancel2} />
					<ModalCard open={open3} cancel={handdleCancel3} />
					<ModalCreateCard open={open4} cancel={handdleCancel4} />
				</div>
				<div className='flex flex-col mt-2 px-5'>
					<div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
						<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
							<div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
								<table className='min-w-full divide-y divide-gray-200'>
									<thead className='bg-gray-50'>
										<tr>
											<th
												scope='col'
												className='text-center px-6 py-3 text-base font-medium text-gray-500 uppercase tracking-wider'>
												Bank Number
											</th>
											<th
												scope='col'
												className='text-center px-6 py-3 text-base font-medium text-gray-500 uppercase tracking-wider'>
												Card Number
											</th>
											<th
												scope='col'
												className='text-center px-6 py-3 text-base font-medium text-gray-500 uppercase tracking-wider'>
												Money
											</th>
											<th
												scope='col'
												className=' text-center px-6 py-3 text-base font-medium text-gray-500 uppercase tracking-wider'>
												Card Opening Date
											</th>
											<th
												scope='col'
												className=' text-center px-6 py-3 text-base font-medium text-gray-500 uppercase tracking-wider'>
												CVV
											</th>
										</tr>
									</thead>
									<tbody className='bg-white divide-y divide-gray-200'>
										{((user && user.card) || []).map(
											(item: any, index: number) => (
												<tr key={index} onClick={() => handdleOpen3(index)}>
													<td className='px-6 py-4 whitespace-nowrap text-center'>
														<div className='text-base text-gray-900'>
															{item.bankNumber}
														</div>
													</td>
													<td className='px-6 py-4 whitespace-nowrap text-center'>
														<div className='text-base text-gray-900'>
															{item.cardNumber}
														</div>
													</td>
													<td className='px-6 py-4 whitespace-nowrap text-center'>
														<div className='text-base text-gray-900'>
															{item.amount} USD
														</div>
													</td>
													<td className='px-6 py-4 whitespace-nowrap text-center'>
														{' '}
														{dayjs(item.createdAt).format('MM/YY')}
													</td>
													<td className='px-6 py-4 whitespace-nowrap text-center text-base text-gray-500'>
														<span className='px-4 py-2 inline-flex text-base leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
															{item.cvvNumber}
														</span>
													</td>
												</tr>
											)
										)}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
