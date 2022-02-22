import { useEffect, useState } from 'react';

export const useValidation = (value, validations) => {
	const [errorMessage, setErrorMessage] = useState('');
	const [isEmptyInput, setEmpty] = useState(false);
	const [isEmptyDropdown, setEmptyDropdown] = useState(false);
	const [isNumber, setNumber] = useState(false);
	const [isDate, setDate] = useState(false);
	const [isPhone, setPhone] = useState(false);
	const [minLengthError, setMinLengthError] = useState(false);

	useEffect(() => {
		for (let validation in validations) {
			switch (validation) {
				case 'isEmptyInput':
					if (value.length <= 0) {
						setEmpty(true);
						setErrorMessage('Обязательное поле');
					} else {
						setEmpty(false);
						setErrorMessage('');
					}
					break;

				case 'isEmptyDropdown':
					setEmptyDropdown(true)
					setErrorMessage('Выберите один из пунктов')
					break;

				case 'minLength':
					if (value.length < validations[validation]) {
						setMinLengthError(true);
						setErrorMessage(`Заполните поле корректно`);
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
		isEmptyInput,
		errorMessage,
		isNumber,
		isDate,
		isPhone,
		isEmptyDropdown,
		minLengthError,
	};
};


