import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import './style.scss';

const Dropdown = ({ options, selected, setSelected }) => {
	const [isOpen, setIsOpen] = useState(false);
	const active = isOpen && 'active';

	const selectHandler = (e) => {
		setSelected(e.target.innerText);
		setIsOpen(!isOpen);
		if (e.charCode === 13) setIsOpen(!isOpen);
	};

	const keyHandler = (e) => {
		if (e.charCode === 13) {
			setIsOpen(!isOpen);
		}
	};

	return (
		<div className='dropdown' tabIndex='0' onKeyPress={keyHandler}>
			<div className='dropdown-btn' onClick={() => setIsOpen(!isOpen)}>
				<span>{selected} </span>
				<MdKeyboardArrowDown className={active} />
			</div>
			{isOpen && (
				<div className='dropdown-content'>
					{options.map((item) => (
						<div
							onKeyPress={selectHandler}
							tabIndex='0'
							key={item}
							onClick={selectHandler}
							className='dropdown-item'

						>
							{item}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
