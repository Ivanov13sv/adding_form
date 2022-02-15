import React from 'react';
import './style.scss'

const Input = (props) => {
	const classes = props.className? `input ${props.className}` : 'input';
	return <input  {...props} className={classes} />;
};

export default Input;
