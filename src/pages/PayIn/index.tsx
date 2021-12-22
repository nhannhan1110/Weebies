import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { paypalTransaction } from '../../apis/transaction/paypalTransaction';
import { ButtonSpinner } from '../../components/ButtonSpinner';
import { notifyError, notifySuccess } from '../../utils/notify';
import { payInSchema } from '../../validate';
import './style.scss';

interface PayInProps {}

export const PayIn = (props: PayInProps) => {
  const history = useHistory();
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm({
		resolver: yupResolver(payInSchema)
	});
	console.log(errors);
	const submit = async (data: any) => {
		console.log('SUBMIT', data);
    const obj = {
			cardNumber: data.cardNumber,
			transactionAmount: data.amount,
			cvvNumber: data.cvv,
			password: data.password
		};
		if (data.typeCard === 2) {
			// typeCard
			const result = await paypalTransaction(obj);
			console.log(
				`LHA:  ===> file: index.tsx ===> line 36 ===> result`,
				result
			);
      if(result.error===false)
      {
        window.open(result.data, "_blank");
        notifySuccess("Payment Successful");
        history.push('/');
      }else {
        notifyError(result.message);
      }
		}
	};
  return (
		<div className='payInPage container'>
			<div className='payInPage-form'>
				<div className='payInPage-form-img'>
					<img src='https://i.imgur.com/1FosXYH.png' alt='' />
				</div>
				<form
					onSubmit={handleSubmit(submit)}
					className='payInPage-form-content'>
					<p>Nạp tiền vào tài khoản</p>
					<br />
					<input
						type='text'
						{...register('cardNumber')}
						id='idcard'
						className='form-control'
						placeholder='Mã số thẻ'
					/>
					<p className='text-danger'>{errors.idcard?.message}</p>
					{/* <input
						type='date'
						id='lastdate'
						{...register('expirationDate')}
						className='form-control mt-4'
						placeholder='Ngày hết hạn'
					/>
					<p className='text-danger'>{errors.lastdate?.message}</p> */}
					<input
						type='money'
						id='money'
						{...register('amount')}
						className='form-control mt-4'
						placeholder='Số tiền'
					/>
					<p className='text-danger'>{errors.amount?.message}</p>
					<input
						type='text'
						id='CVV'
						{...register('cvv')}
						className='form-control mt-4'
						placeholder='CVV/CVC2'
					/>
					<p className='text-danger'>{errors.CVV?.message}</p>
					<input
						type='password'
						id='password'
						{...register('password')}
						className='form-control mt-4'
						placeholder='Mật khẩu'
					/>
					<p className='text-danger'>{errors.password?.message}</p>
					<div className='radio mt-4'>
						<input
							type='radio'
							value={1}
							{...register('typeCard')}
							id='vnpay'
						/>
						<label className='radio' htmlFor='vnpay'>
							{' '}
							VN PAY
						</label>
						<br></br>
						<input
							type='radio'
							value={2}
							defaultChecked={true}
							{...register('typeCard')}
							id='paypal'
						/>
						<label className='radio' htmlFor='paypal'>
							{' '}
							PAY PAL
						</label>
					</div>
					<br />
					<button
						id='login'
						className='btn btn-block login-btn my-4'
						type='submit'
						disabled={isSubmitting}>
						{!isSubmitting ? 'Nạp tiền' : <ButtonSpinner />}
					</button>
				</form>
			</div>
		</div>
	);      

        
};
