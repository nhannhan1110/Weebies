import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { IoLogoFacebook, IoLogoTwitter } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { ButtonSpinner } from '../../components/ButtonSpinner';
import {
	getCurrentUserAsync,
	userLoginAsync
} from '../../features/auths/slice/thunk';
import { signInSchema, transferSchema } from '../../validate';
import card from '../../images/card.png';
import './style.scss';
import { transferToUserApi } from '../../apis/transaction/transferToUser';
import { notifySuccess } from '../../utils/notify';

interface TransferProps {}

export const Transfer = (props: TransferProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm({
		resolver: yupResolver(transferSchema)
	});
	const submit = async (data: any) => {
		const obj = {
			cardNumber: data.idcard,
			transactionAmount: data.money,
			cvvNumber: data.CVV,
			password: data.password
		};
		const results = await transferToUserApi(obj);
		if (results.statusCode === 200) {
			notifySuccess('Transfer Successfully');
		} else {
			notifySuccess('Transfer Failed');
		}
	};

	return (
		<div className='transferPage container'>
			<div className='transferPage-form'>
				<div className='transferPage-form-img'>
					<img src='https://i.imgur.com/1FosXYH.png' alt='' />
				</div>
				<form
					onSubmit={handleSubmit(submit)}
					className='transferPage-form-content'>
					<p>Chuyển tiền</p>
					<br />
					<input
						type='text'
						{...register('idcard')}
						id='idcard'
						className='form-control'
						placeholder='Mã số thẻ'
					/>
					<p className='text-danger'>{errors.idcard?.message}</p>

					<input
						type='money'
						id='money'
						{...register('money')}
						className='form-control mt-4'
						placeholder='Số tiền'
					/>
					<p className='text-danger'>{errors.money?.message}</p>

					<input
						type='text'
						id='CVV'
						{...register('CVV')}
						className='form-control  mt-4'
						placeholder='CVV/CVC2'
					/>
					<p className='text-danger'>{errors.CVV?.message}</p>
					<input
						type='password'
						id='password'
						{...register('password')}
						className='form-control  mt-4'
						placeholder='Mật khẩu'
					/>
					<p className='text-danger'>{errors.password?.message}</p>
					<br />
					<button
						id='login'
						className='btn btn-block login-btn my-4'
						type='submit'
						disabled={isSubmitting}>
						{!isSubmitting ? 'Chuyển tiền' : <ButtonSpinner />}
					</button>
				</form>
			</div>
		</div>
	);
};
