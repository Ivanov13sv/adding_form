import { MdKeyboardArrowDown } from 'react-icons/md';
import './style.scss';

const Dropdown = ({ fields }) => {
	const { isOpen, keyHandler, options, selectHandler, selected, setOpen } =
	fields;

	const active = isOpen && 'active';

	const selectByKey = (e) => {
		selectHandler(e);
	};

	return (
		<div className='dropdown' tabIndex='0' onKeyPress={keyHandler}>
			<div className='dropdown-btn' onClick={() => setOpen(!isOpen)}>
				<span>{selected}</span>
				<MdKeyboardArrowDown className={active} />
			</div>
			{isOpen && (
				<div className='dropdown-content'>
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
