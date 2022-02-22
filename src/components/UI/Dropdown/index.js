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
		isDirty,
	} = fields;

	const openDropdown = isOpen
		? 'dropdown__content dropdown__content-active'
		: 'dropdown__content';

	const selectByKey = (e) => {
		selectHandler(e);
	};

	const errorBorderClass =
		isDirty && !selected && !isOpen && 'dropdown__btn-errorBorder';

	const showErrorTooltip =
		isDirty && emptyDropdown && !isOpen && !selected ? (
			<span className='dropdown__error'>{errorMessage}</span>
		) : null;

	const showPlaceholder = selected ? (
		<span className='dropdown__select'>{selected}</span>
	) : (
		<input disabled placeholder={placeholder} />
	);

	return (
		<div className='dropdown' tabIndex='0' onKeyPress={keyHandler}>
			<div
				className={`dropdown__btn ${errorBorderClass}`}
				onClick={selectHandler}
			>
				{showPlaceholder}
				<MdKeyboardArrowDown className={isOpen && 'active'} />
			</div>
			{showErrorTooltip}

			<div className={openDropdown}>
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
		</div>
	);
};
