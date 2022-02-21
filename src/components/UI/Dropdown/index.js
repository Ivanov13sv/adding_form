import { MdKeyboardArrowDown } from 'react-icons/md';
import './style.scss';

export const Dropdown = ({ fields }) => {
	const {
		isOpen,
		keyHandler,
		options,
		selectHandler,
		selected,
		placeholder,
		errorMessage,
		emptyDropdown,
		validInput,
		isDirty
	} = fields;


	const active = isOpen && 'active';

	const selectByKey = (e) => {
		selectHandler(e);
	};

	const errorClasses = 
	(isDirty && !selected && !isOpen &&  window.screen.width  < 888) ? 'dropdown__btn-errorBorder' : null;

	return (
		<div className='dropdown' tabIndex='0' onKeyPress={keyHandler}>
			<div className={`dropdown__btn ${errorClasses}`} onClick={selectHandler}>
				{selected ? (
					<span className='dropdown__select'>{selected}</span>
				) : (
					<input disabled placeholder={placeholder} />
				)}
				<MdKeyboardArrowDown className={active} />
				
			</div>
			{ isDirty && emptyDropdown && !isOpen && !selected ? <span className='dropdown__error'>{errorMessage}</span> : null}
			{isOpen && (
				<div className='dropdown__content'>
					{options.map((item) => (
						<div
							onKeyPress={selectByKey}
							tabIndex='0'
							key={item}
							onClick={selectByKey}
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

