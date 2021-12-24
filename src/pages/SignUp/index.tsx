import React from 'react';
import { useForm } from 'react-hook-form';
import {
	IoLogoFacebook,
	IoLogoTwitter,
	IoMdRadioButtonOff,
	IoMdRadioButtonOn
} from 'react-icons/io';
import { Link, useHistory } from 'react-router-dom';
import { registerAsync } from '../../apis/auths/register.api';
import { notifyError, notifySuccess } from '../../utils/notify';
import { signUpSchema } from '../../validate';
import { yupResolver } from '@hookform/resolvers/yup';
import './style.scss';
import { date } from 'yup';
import { getCurrentUserAsync } from '../../features/auths/slice/thunk';
import { useDispatch } from 'react-redux';

interface SignInProps {}

export const SignUp = (props: SignInProps) => {
	const history = useHistory(); //chuyen trang
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm({
		resolver: yupResolver(signUpSchema)
	});
	const submit = async (data: any, e: any) => {
		e.preventDefault();

		const obj = {
			firstName: data.firstName,
			lastName: data.lastName,
			birthday: data.birthday,
			email: data.email,
			phone: data.phone,
			// identityCardNumber: data.identityCard,
			identityCardNumber: '1111111111112',
			createdPlace: data.addressCard,
			career: data.job,
			password: data.password,
			isCreditCard: true,
		};
		
		const result = await registerAsync(obj);
		// console.log(result);
		if ([200, 201].includes(result.statusCode)) {
			//Luu token
			localStorage.setItem('token', result.data.token);
			dispatch(getCurrentUserAsync());
			//Thong bao
			notifySuccess('Sign up success');
			//Chuyen trang
			history.push('/');
		} else {
			notifyError('Sign up fail');
		}
	};
	console.log(errors);
	return (
		<div className='signUpPage container'>
			<div className='signUpPage-form'>
				<div className='signUpPage-form-img'>
					<img
						src='https://images.pexels.com/photos/6214378/pexels-photo-6214378.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
						alt=''
					/>
				</div>
				<form
					onSubmit={handleSubmit(submit)}
					className='signUpPage-form-content'>
					<p>Thông tin đăng kí</p>
					<br />
					<input
						type='text'
						{...register('lastName')}
						id='lastname'
						className='form-control mt-4'
						placeholder='Họ của bạn'
					/>
					<p className='text-danger'>{errors.lastName?.message}</p>
					<input
						type='text'
						{...register('firstName')}
						id='firstname'
						className='form-control mt-4'
						placeholder='Tên của bạn'
					/>
					<p className='text-danger'>{errors.firstName?.message}</p>
					<input
						type='date'
						id='birth'
						{...register('birthday')}
						className='form-control mt-4'
						placeholder='Ngày sinh'
					/>
					<p className='text-danger'>{errors.birthday?.message}</p>
					<input
						type='email'
						{...register('email')}
						id='email'
						className='form-control mt-4'
						placeholder='Email'
					/>
					<p className='text-danger'>{errors.email?.message}</p>
					<input
						type='text'
						{...register('phone')}
						id='phone'
						className='form-control mt-4'
						placeholder='Số điện thoại'
					/>
					<p className='text-danger'>{errors.phone?.message}</p>
					<input
						type='text'
						{...register('identityCard')}
						id='CMND'
						className='form-control mt-4'
						placeholder='CMND'
					/>
					<p className='text-danger'>{errors.identityCard?.message}</p>
					<input
						type='text'
						{...register('addressCard')}
						id='address'
						className='form-control mt-4'
						placeholder='Nơi cấp'
					/>
					<p className='text-danger'>{errors.addressCard?.message}</p>
					<input
						type='text'
						{...register('job')}
						id='job'
						className='form-control mt-4'
						placeholder='Nghề nghiệp'
					/>
					<p className='text-danger'>{errors.job?.message}</p>
					<input
						type='password'
						{...register('password')}
						id='password'
						className='form-control mt-4'
						placeholder='Mật khẩu'
					/>
					<p className='text-danger'>{errors.password?.message}</p>
					<input
						type='password'
						{...register('confirmPassword')}
						id='confirmPassword'
						className='form-control mt-4'
						placeholder='Nhập lại mật khẩu'
					/>
					<p className='text-danger'>{errors.confirmPassword?.message}</p>
					<p className='mt-4'>Loại thẻ</p>
					<div className='radio pl-4' {...register('typeCard')}>
						<div className='mt-2'>
							<input type='radio' value={'0'} name='group-radio' id='credit' />
							<label className='radio cursor-pointer' htmlFor='credit'>
								{' '}
								Credit Card
							</label>
						</div>
						<div>
							<input type='radio' value={'1'} name='group-radio' id='debit' />
							<label className='radio  cursor-pointer' htmlFor='debit'>
								{' '}
								Debit Card
							</label>
						</div>
					</div>
					<button
						id='register'
						className='btn btn-block login-btn my-4'
						type='submit'
						disabled={isSubmitting}>
						{!isSubmitting ? (
							'Register'
						) : (
							<span className='spinner-border spinner-border-sm'></span>
						)}
					</button>
					<p>
						Already have account? <Link to='/signin'>Signin here</Link>
					</p>
					
				</form>
			</div>
		</div>
	);
};
