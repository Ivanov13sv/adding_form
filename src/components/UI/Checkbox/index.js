import React from 'react';

import './style.scss';

export const Checkbox = ({ placeholder, isChecked, setIsChecked }) => {

	const  checkedHandler = () =>{
		setIsChecked(!isChecked)
	}
	return (
		<label className='check'>
			<div className='check__btn'>
				<input onChange={checkedHandler} className='check__input' type='checkbox' checked={isChecked} />
				<span className={`check__box`}></span>
				{placeholder}
			</div>
		</label>
	);
};
