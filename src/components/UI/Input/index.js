import React from 'react';
import './style.scss';

export const Input = (props) => {

		
	// const error =
	// 	((!props.item.validInput && window.screen.width) > 888) ? (
	// 		<div className={'inputBlock__errorMessage'}>
	// 			{props.item.errorMessage}
	// 		</div>
	// 	) : null;

	const errorClasses = 
	(!props.item.validInput ) ? 'inputBlock__errorBorder' : null;
		

	return (
		<div className='inputBlock'>
			
			<input {...props} className={`inputBlock__item ${errorClasses}`} />
			{!props.item.validInput &&
				<div className={'inputBlock__errorMessage'}>
				{props.item.errorMessage}
			</div>}
		</div>
	);
};
