import React from 'react';
import './style.css';

const Form = () => {
	return (
		<div className='form'>
			<form className='form__body'>
				<h3 className='form__title'>Authorization</h3>

				<input
					className='form__email'
					name='email'
					placeholder='Enter your email...'
				/>

				<input
					className='form__password'
					name='password'
					type='password'
					placeholder='Enter your password...'
				/>
				<button type='button' className='form__btn'>
					Log in
				</button>
			</form>
		</div>
	);
};

export default Form;
