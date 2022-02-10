import { useState, useEffect } from 'react';
export const useValidation = (value, validations) => {
	const [isEmpty, setIsEmpty] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [minLengthError, setMinLengthError] = useState(false);
	const [inputValid, setInputValid] = useState(false);

	useEffect(() => {
		for (const validation in validations) {
			switch (validation) {
				case 'isEmpty':
					value ? setIsEmpty(false) : setIsEmpty(true);
					break;
				case 'minLength':
					value.length < validations[validation]
						? setMinLengthError(true)
						: setMinLengthError(false);
					break;
				case 'isEmail':
					if (!value.length) return setEmailError(false);

					const regex = /\S+@\S+\.\S+/;
					regex.test(String(value).toLowerCase())
						? setEmailError(false)
						: setEmailError(true);
					break;
				default:
					return;
			}
		}
	}, [value]);

	useEffect(() => {
		if (isEmpty || emailError || minLengthError) {
			setInputValid(false);
		} else {
			setInputValid(true);
		}
	}, [isEmpty, emailError, minLengthError]);

	return {
		isEmpty,
		minLengthError,
		emailError,
        inputValid
	};
};
