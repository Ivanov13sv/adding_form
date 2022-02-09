import React, { useState, useEffect } from 'react';
import './style.css';

const Form = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailDirty, setEmailDirty] = useState(false);
	const [passwordDirty, setPasswordDirty] = useState(false);
	const [emailError, setEmailError] = useState('email can not be empty');
	const [passwordError, setPasswordError] = useState(
		'password can not be empty'
	);
	const [validForm, setValidForm] = useState(false);

	useEffect(() => {
		if (emailError || passwordError) {
			setValidForm(false);
		} else {
			setValidForm(true);
		}
	}, [emailError, passwordError]);

	const emailHandler = (e) => {
		setEmail(e.target.value);
		const re = /\S+@\S+\.\S+/;

		if (!re.test(String(e.target.value).toLowerCase())) {
			setEmailError('Wrong email');
			console.log('Некорректный емеил');
		} else {
			setEmailError('');
			console.log('корректный емейл');
		}

		if (!e.target.value) {
			setEmailError('email can not be empty');
		}
		return;
	};

	const passwordHander = (e) => {
		setPassword(e.target.value);

		if (e.target.value.length < 3) {
			setPasswordError('Password must be more 3 simbols');
		} else if (e.target.value.length > 16) {
			setPasswordError('Password must be less 16 simbols');
		} else {
			setPasswordError('');
		}

		if (!e.target.value) {
		}
	};

	const blurHandler = (e) => {
		switch (e.target.name) {
			case 'email':
				setEmailDirty(true);
				break;
			case 'password':
				setPasswordDirty(true);
				break;
			default:
				return;
		}
	};

	const sendHandler = () => {
		console.log(passwordDirty);
	};

	return (
		<div className='form'>
			<form className='form__body'>
				<h3 className='form__title'>Authorization</h3>
				{emailDirty && emailError && (
					<p className='label email__label'>{emailError} </p>
				)}

				<input
					value={email}
					onChange={(e) => emailHandler(e)}
					onBlur={blurHandler}
					className='form__email'
					name='email'
					placeholder='Enter your email...'
				/>
				{passwordError && passwordDirty && (
					<p className='label password__label '>{passwordError} </p>
				)}
				<input
					value={password}
					onChange={passwordHander}
					onBlur={blurHandler}
					className='form__password'
					name='password'
					type='password'
					placeholder='Enter your password...'
				/>
				<button
					disabled={!validForm}
					type='button'
					onClick={sendHandler}
					className='form__btn'
				>
					Log in
				</button>
			</form>
		</div>
	);
};

export default Form;
