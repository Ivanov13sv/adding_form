import { useEffect, useState } from 'react';

export const useValidation = (value, validations) => {
	const [errorMessage, setErrorMessage] = useState('');
	const [isEmpty, setEmpty] = useState(false);
	const [isNumber, setNumber] = useState(false);
	const [isDate, setDate] = useState(false);
	const [isPhone, setPhone] = useState(false);


	useEffect(() => {
		for (let validation in validations) {
			switch (validation) {
				case 'isEmpty':
					if (value.length) {
						setEmpty(false);
					} else {
						setEmpty(true);
						setErrorMessage('Обязательное поле');
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
	}, [value]);



	return {
		isEmpty,
		errorMessage,
		isNumber,
		isDate,
		isPhone,
	};
};
