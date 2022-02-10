import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { IconContext } from 'react-icons';
import './style.scss';

const Dropdown = ({
	placeholder,
	clientsOptions,
	selected,
	setSelected,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const active = isOpen && 'active';

	const selectHandler = (e) => {
		setSelected(e.target.innerHTML)
		setIsOpen(!isOpen)
		console.log(e);

	};





	return (
		<div className='dropdown'>
			<div className='dropdown-btn' onClick={() => setIsOpen(!isOpen)}>
				<span>{selected} </span>
				<MdKeyboardArrowDown className={active} />
			</div>
			{isOpen && (
				<div className='dropdown-content' >
					{clientsOptions.map((item) => (
						<div key={item} onClick={selectHandler} className='dropdown-item'>
							{item}
						</div>
					))}
					{/* <div onClick={selectHandler} className='dropdown-item'>
						VIP
					</div>
					<div className='dropdown-item'>ОМС</div>
					<div className='dropdown-item'>Проблемные</div> */}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
