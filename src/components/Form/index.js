import React from 'react';
import './style.css';

import { useInput } from '../../hooks/useInput';

const Form = () => {
	const email = useInput('', { isEmpty: true, minLength: 3, isEmail: false });
	const password = useInput('', { isEmpty: true, minLength: 5 });

	const validForm = email.inputValid && password.inputValid;

	return (
		<div className='form'>
			<form className='form__body'>
				<h3 className='form__title'>Authorization</h3>
				{email.isDirty && email.isEmpty && (
					<p className='label email__label'>
						Поле не может быть пустым
					</p>
				)}
				{email.isDirty && email.emailError && (
					<p className='label email__label'>wrong email</p>
				)}
				<input
					value={email.value}
					onChange={email.onChange}
					onBlur={email.onBlur}
					className='form__email'
					name='email'
					placeholder='Enter your email...'
				/>
				{password.isDirty && password.minLengthError && (
					<p className='label password__label'>
						Пароль не может быть меньше 5
					</p>
				)}
				<input
					value={password.value}
					onChange={password.onChange}
					onBlur={password.onBlur}
					className='form__password'
					name='password'
					type='password'
					placeholder='Enter your password...'
				/>
				<button
					disabled={!validForm}
					type='button'
					className='form__btn'
				>
					Log in
				</button>
			</form>
		</div>
	);
};

export default Form;
