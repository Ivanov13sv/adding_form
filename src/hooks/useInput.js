import { useState, useEffect } from 'react';
import { useValidation } from './useValidation';

export const useInput = (initialValue, validations, placeholder) => {
	const [value, setValue] = useState(initialValue);
	const [isDirty, setDirty] = useState(false);
	const [validInput, setValidInput] = useState(false);
	const valid = useValidation(value, validations);

	const { minLengthError, isEmpty } = valid;

	const removeLetters = (value) => {
		return value.replace(/\D/gi, '');
	};

	const dateMask = (value) => {
		const inputValue = removeLetters(value);
		let result = '';

		if (inputValue.length) result += inputValue.slice(0, 2);
		if (inputValue.length > 2) result += '-' + inputValue.slice(2, 4);
		if (inputValue.length > 4) result += '-' + inputValue.slice(4, 8);

		return result;
	};

	const phoneMask = (number) => {
		let cleanNumbers = removeLetters(number);
		let result = '+7 ';
		if (cleanNumbers.length > 1) {
			result += `(${cleanNumbers.slice(1, 4)}`;
		}
		if (cleanNumbers.length >= 5) {
			result += `) ${cleanNumbers.slice(4, 7)}`;
		}
		if (cleanNumbers.length >= 8) {
			result += '-' + cleanNumbers.slice(7, 9);
		}
		if (cleanNumbers.length >= 10) {
			result += '-' + cleanNumbers.slice(9, 11);
		}
		return result;
	};


	const onChange = (e) => {
		if (valid.isNumber) {
			const inputValue = removeLetters(e.target.value);
			setValue(inputValue);
			return;
		}

		if (valid.isDate) {
			const inputValue = dateMask(e.target.value);
			setValue(inputValue);
			return;
		}
		if (valid.isPhone) {
			const inputValue = phoneMask(e.target.value);
			setValue(inputValue);
			return;
		}

		setValue(e.target.value);
	};

	const onBlur = (e) => {
		setDirty(true);
	};

	useEffect(() => {
		if (minLengthError || isEmpty) {
			setValidInput(false);
		} else {
			setValidInput(true);
		}
	}, [minLengthError, isEmpty]);

	return {
		inputControl: { value, onChange, onBlur, placeholder },
		isDirty,
		validInput,
		...valid,
	};
};
