import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { openCard } from '../../../../apis/user/openCard.api';
import { ButtonSpinner } from '../../../../components/ButtonSpinner';
import { ModalLMS } from '../../../../components/Modal';
import { addCard } from '../../../../features/auths/slice';
import { notifyError, notifySuccess } from '../../../../utils/notify';
import { createCardSchema } from '../../../../validate';
interface Props {
	cancel: Function;
	open: boolean;
}

const ModalCreateCard = (props: Props) => {
	const {
		register,
		handleSubmit,
		reset,
		setValue,
		formState: { isSubmitting, errors }
	} = useForm({ resolver: yupResolver(createCardSchema) });
	const dispatch = useDispatch();
	const submit = async (data: any) => {
		console.log('data', data);
		const obj = {
			password: data.password,
			isCreditCard: !!data.isCreditCard
		};

		const result = await openCard(obj);
		if (result.statusCode) {
			dispatch(addCard(result.data));
			notifySuccess('Create card successfully');
		} else {
			notifyError(result.message);
		}
	};
	return (
		<div>
			{props.open ? (
				<ModalLMS title='Change InFo' withHeader={true} cancel={props.cancel}>
					<div className='changeInfo'>
						<form onSubmit={handleSubmit(submit)} className='changInfomation'>
							<p>Create Card</p>
							<input
								type=''
								{...register('password')}
								id='phone'
								className='form-control'
								placeholder='Password'
							/>
							<p className='text-danger'>{errors.isCreditCard?.message}</p>
							<div className='radio pl-4' {...register('isCreditCard')}>
								<div className='mt-2'>
									<input
										type='radio'
										value={'0'}
										name='group-radio'
										id='credit'
										defaultChecked={true}
									/>
									<label
										className='radio cursor-pointer'
										onClick={() => {
											setValue('isCreditCard', '0');
										}}
										htmlFor='credit'>
										{' '}
										Credit Card
									</label>
								</div>
								<div>
									<input
										type='radio'
										value={'1'}
										name='group-radio'
										id='debit'
									/>
									<label
										className='radio  cursor-pointer'
										onClick={() => {
											setValue('isCreditCard', '1');
										}}
										htmlFor='debit'>
										{' '}
										Debit Card
									</label>
								</div>
							</div>

							<button
								id='changeinfo'
								className='btn btn-block login-btn my-4'
								type='submit'
								style={{ backgroundColor: '#00ACB7' }}>
								{isSubmitting ? <ButtonSpinner /> : 'Submit'}
							</button>
						</form>
					</div>
				</ModalLMS>
			) : (
				<></>
			)}
		</div>
	);
};

export default ModalCreateCard;
