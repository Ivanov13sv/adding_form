import { useEffect, useState } from 'react';

export const useValidation = (value, validations) => {
	const [errorMessage, setErrorMessage] = useState('');
	const [isEmpty, setEmpty] = useState(false);
	const [isNumber, setNumber] = useState(false);
	const [isDate, setDate] = useState(false);
	const [isPhone, setPhone] = useState(false);
	const [minLengthError, setMinLengthError] = useState(false);
	const [emptyDropdown, setEmptyDropdown] = useState(false);

	useEffect(() => {
		for (let validation in validations) {
			switch (validation) {
				case 'isEmpty':
					if (value.length) {
						setEmpty(false);
						setErrorMessage('');
					} else {
						setEmpty(true);
						setErrorMessage('Обязательное поле');
					}
					break;

				case 'emptyDropdown':
					setEmptyDropdown(true);
					setErrorMessage('Обязательное поле');
					break;

				case 'minLength':
					if (value.length < validations[validation]) {
						setMinLengthError(true);
						setErrorMessage(`Заполните поле полностью`);
					} else {
						setMinLengthError(false);
						setErrorMessage(``);
					}
					break;

				case 'isNumber':
					setNumber(true);
					break;

				case 'isDate':
					setDate(true);
					break;

				case 'isPhone':
					setPhone(true);
					break;

				default:
					return;
			}
		}
		// eslint-disable-next-line
	}, [value]);

	return {
		isEmpty,
		errorMessage,
		isNumber,
		isDate,
		isPhone,
		minLengthError,
		emptyDropdown,
	};
};
