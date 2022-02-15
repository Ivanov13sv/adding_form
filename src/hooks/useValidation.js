import { useEffect, useState } from 'react';

export const useValidation = (value, validations) => {


	const [errorMessage, setErrorMessage] = useState('');
	const [isEmpty, setEmpty] = useState(true);
	const [minLengthError, setMinLengthError] = useState(true);
	const [maxLengthError, setMaxLengthError] = useState(true);
	const [isNumber, setNumber] = useState(false);
	const [isDate, setDate] = useState(false);

	useEffect(() => {
		for (let validation in validations) {
			switch (validation) {
				case 'minLength':
					if (
						value.length !== 0 &&
						value.length < validations[validation]
					) {
						setMinLengthError(true);
						setErrorMessage(
							'Длина пароля должна быть не менее 5 символов'
						);
					} else {
						setMinLengthError(false);
					}
					break;

				case 'isEmpty':
					if (value.length) {
						setEmpty(false);
					} else {
						setEmpty(true);
						setErrorMessage('Обязательное поле');
					}
					break;

				case 'maxLength':
					if (value.length > 10) {
						setMaxLengthError(true);
						setErrorMessage(` Поле должно быть меньше 10 символо`);
					} else {
						setMaxLengthError(false);
					}
					break;

				case 'isNumber':
					setNumber(true);
					break;

				case 'isDate':
					setDate(true);
					break;

				default:
					return;
			}
		}
	}, [value]);

	return {
		isEmpty,
		minLengthError,
		errorMessage,
		maxLengthError,
		isNumber,
		isDate,
	};
};
