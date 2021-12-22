import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
	lastName: yup.string().required('Lastname is required'),
	firstName: yup.string().required('Firstname is required'),
	birthday: yup.string().required('Birthday is required'),
	email: yup.string().email('Email is invalid').required('Email is required'),
	phone: yup.string().required('Phone is required'),
	identityCard: yup.string().required('IdCard is required'),
	addressCard: yup.string().required('AddressCard is required'),
	job: yup.string().required('Job is required'),
	password: yup.string().required('Password is required'),
	confirmPassword: yup.string().required('ConfirmPassword is required'),
	// typeCard: yup.string().required('TypeCard is required')
});
export const payInSchema = yup.object().shape({
	amount: yup.string().required('Amount is required'),
	typeCard: yup.number().required('TypeCard is required'),
	cardNumber: yup.string().required('CardNumber is required'),
	// expirationDate: yup.string().required('ExpirationDate is required'),
	cvv: yup.string().required('CVV is required'),
	password: yup.string().required('NameCard is required'),
})

export const signInSchema = yup.object().shape({
	email: yup.string().email().required('Please enter the required field'),
	password: yup
		.string()
		.required('Please enter the required field')
		.min(6, 'Password must have at least 6 character')
});
export const changPassSchema = yup.object().shape({
	oldPassword: yup.string().required('Please enter the required field'),
	newPassword: yup
		.string()
		.required('Please enter the required field')
		.min(6, 'Password must have at least 6 character')
});

export const forgotPassSchema = yup.object().shape({
	email: yup.string().email().required('Please enter the required field')
});

export const updateInfoSchema = yup.object().shape({
	phone: yup
		.string()
		.required('Please enter the required field')
		.matches(/(84|0[1|2|3|4|5|6|7|8|9])+([0-9]{8})\b/),
	name: yup.string().required('Please enter the required field')
});

export const transferSchema = yup.object().shape({
	idcard: yup.string().required('Please enter the required field'),
	money: yup.string().required('Please enter the required field'),
	CVV: yup.string().required('Please enter the required field'),
	password: yup.string().required('Please enter the required field')
});
