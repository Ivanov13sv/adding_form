import { useState } from 'react';
import { useValidation } from './useValidation';

export const useDropdown = (placeholder, options, validations) => {
	const [selected, setSelected] = useState('');
	const [isOpen, setOpen] = useState(false);
	const [isDirty, setDirty] = useState(false);

	const valid = useValidation(selected, validations);

	const onBlur = () => {
		setDirty(true);
	};


	const setOpenAndDirty = () => {
		setOpen(!isOpen);
		setDirty(true);
	};

	const selectHandler = (e) => {
		setSelected(e.target.innerText);
		setOpenAndDirty();
	};

	const keyHandler = (e) => {
		if (e.charCode === 13 || e.charCode === 32) {
			setOpenAndDirty();
		}
	};

	return {
		selected,
		selectHandler,
		options,
		isOpen,
		keyHandler,
		placeholder,
		isDirty,
		...valid,
	};
};
