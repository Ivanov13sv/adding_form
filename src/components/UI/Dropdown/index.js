import { MdKeyboardArrowDown } from 'react-icons/md';
import './style.scss';

const Dropdown = ({ fields }) => {
	const {
		isOpen,
		keyHandler,
		options,
		selectHandler,
		selected,
		placeholder,
		errorMessage,
		emptyDropdown,
		isDirty
	} = fields;

	console.log(fields)

	const active = isOpen && 'active';

	const selectByKey = (e) => {
		selectHandler(e);
	};

	return (
		<div className='dropdown' tabIndex='0' onKeyPress={keyHandler}>
			<div className='dropdown__btn' onClick={selectHandler}>
				{selected ? (
					<span className='dropdown__select'>{selected}</span>
				) : (
					<input disabled placeholder={placeholder} />
				)}

				<MdKeyboardArrowDown className={active} />
				{ isDirty && emptyDropdown && !isOpen && !selected ? <span className='dropdown__error'>{errorMessage}</span> : null}
			</div>
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

export default Dropdown;
