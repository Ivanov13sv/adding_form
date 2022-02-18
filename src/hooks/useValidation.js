import { useEffect, useState } from 'react';

export const useValidation = (value, validations) => {
	const [errorMessage, setErrorMessage] = useState('');
	const [isEmpty, setEmpty] = useState(false);
	const [isNumber, setNumber] = useState(false);
	const [isDate, setDate] = useState(false);
	const [isPhone, setPhone] = useState(false);
	const [minLengthError, setMinLengthError] = useState(false);



	useEffect(() => {
		for (let validation in validations) {
			switch (validation) {

				case 'isEmpty':
					if (value.length) {
						setEmpty(false);
						setErrorMessage('')
					} else {
						setEmpty(true);
						setErrorMessage('Обязательное поле');
					}
					break;

				case 'minLength':
					if (value.length < validations[validation]){
						setMinLengthError(true);
						setErrorMessage(`Поле не может быть меньше ${validations[validation]} символов`)
					}
					else{
						setMinLengthError(false)
						setErrorMessage(``)
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
	};
};
