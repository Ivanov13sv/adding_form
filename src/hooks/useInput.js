import { useState } from 'react';
import { useValidation } from './useValidation';

export const useInput = (initialValue, validations) => {
	const [value, setValue] = useState(initialValue);
	const [isDirty, setDirty] = useState(false);
	const valid = useValidation(value, validations);
	console.log(valid)

	const removeLetters = value =>{
		return value.replace(/\D/gi, '');
	}

	const dateMask = value =>{
		let inputValue = removeLetters(value);
		const regex = /(\d{2})(\d{2})/;
		const result = inputValue.replace(regex,'$1-$2').replace(regex, '$1-$2');;
		return result.slice(0,10)
	}

	const onChange = (e) => {
		if (valid.isNumber) {
			const inputValue = removeLetters(e.target.value);
			setValue(inputValue);
			return;
		} 
	
		if (valid.isDate) {
			const res = dateMask(e.target.value);
			setValue(res)
			return;
		} 
		setValue(e.target.value)
	};

	const onBlur = (e) => {
		setDirty(true);
	};

	return {
		value,
		onChange,
		onBlur,
		isDirty,
		...valid,
	};
};
