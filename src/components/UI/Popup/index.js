import './style.scss';

import { AiOutlineClose } from 'react-icons/ai';

export const Popup = ({ active, setActive, children }) => {


	const popupClasses = active ? 'popup popup-active' : 'popup';
	const contentClasses = active
		? 'popup__content popup__content-active'
		: 'popup__content';

	const closePopup = () => {
		setActive(false);
	};

	return (
		<div className={popupClasses} onClick={closePopup}>
			<div
				className={contentClasses}
				onClick={(e) => e.stopPropagation()}
			>
				{children}
				<div className='popup__content-closeBtn' onClick={closePopup}>
					<AiOutlineClose />
				</div>
			</div>
		</div>
	);
};
