import React from 'react';
import './style.scss';

const Input = (props) => {

	const test = props.item.isDirty && !props.item.validInput ? <span className='error_message'>{props.item.errorMessage}</span> : null;

	const classes = props.className ? `input ${props.className}` : 'input';
	return (
		<div className='input_block'>
			<input {...props} className={classes} />
			{test}
		</div>
	);
	
};

export default Input;
