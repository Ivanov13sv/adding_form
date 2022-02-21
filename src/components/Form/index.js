import { useEffect, useState } from 'react';
import { Input } from '../UI/Input';
import { Dropdown } from '../UI/Dropdown';
import { useInput } from '../../hooks/useInput';
import { Checkbox } from '../UI/Checkbox';
import { Button } from '../UI/Button';
import { useDropdown } from '../../hooks/useDropdown';



import './style.scss';

const Form = () => {
	const [formValid, setFormValid] = useState(false);

	const formFields = {
		surname: useInput('', { isEmpty: true }, '*Фамилия'),
		name: useInput('', { isEmpty: true }, '*Имя'),
		patronymic: useInput('', {}, 'Отчество'),
		birthDate: useInput(
			'',
			{ isEmpty: true, isDate: true, minLength: 10 },
			'*Дата рождения'
		),
		gender: useInput('', {}, 'Пол'),
		phone: useInput(
			'',
			{ isPhone: true, minLength: 18 },
			'*Телефон'
		),
		patients: useDropdown(
			'*Группа клиентов',
			['VIP', 'ОМС', 'Проблемные'],
			{ emptyDropdown: true }
		),
		doctors: useDropdown(
			'*Лечащий врач',
			['Иванов А. А.', 'Захаров С.В.', 'Чернышева Ю.Н.'],
			{ emptyDropdown: true }
		),
		sendMessage: useState(false),
		country: useInput('', {}, 'Страна'),
		region: useInput('', {}, 'Область'),
		city: useInput('', { isEmpty: true }, '*Город'),
		street: useInput('', {}, 'Улица'),
		house: useInput('', {}, 'Дом'),
		index: useInput('', { isNumber: true }, 'Индекс'),
		documentType: useDropdown(
			'*Тип документа',
			[
				'Паспорт',
				'Свидетельство о рождении',
				'Водительское удостоверение',
			],
			{ emptyDropdown: true }
		),

		documentSeries: useInput('', {}, 'Серия'),
		documentNumber: useInput('', {}, 'Номер'),
		issued: useInput('', {}, 'Кем выдан'),
		dateOfIssue: useInput(
			'',
			{
				isEmpty: true,
				isDate: true,
				minLength: 10,
			},
			'*Дата выдачи'
		),
	};

	const {
		surname,
		name,
		patients,
		doctors,
		documentType,
		patronymic,
		birthDate,
		gender,
		phone,
		sendMessage,
		country,
		region,
		city,
		street,
		house,
		index,
		documentSeries,
		documentNumber,
		issued,
		dateOfIssue,
	} = formFields;

	useEffect(() => {
		if (
			surname.validInput &&
			name.validInput &&
			birthDate.validInput &&
			gender.validInput &&
			phone.validInput &&
			patients.selected &&
			doctors.selected &&
			city.validInput &&
			documentType.selected &&
			dateOfIssue.validInput
		) {
			setFormValid(true);
		} else {
			setFormValid(false);
		}

		// eslint-disable-next-line
	}, [formFields]);

	const getData = (e) => {
		e.preventDefault();
		let result = {};

		for (let key in formFields) {
			if (formFields[key].selected)
				result[key] = formFields[key].selected;

			if (key === 'sendMessage') {
				result[key] = formFields[key][0];
			}

			if (formFields[key].inputControl)
				result[key] = formFields[key].inputControl.value;
		}
		console.log(result);
	};
	const getErrors = (e) => {
		// e.preventDefault();
		// for (let key in formFields) {
		// 	formFields[key].isDirty = true;
		// }
		// alert('jopa');
	};

	return (
		<form className='form'>
			<div className='form__body form__body--personalInfo'>
				<Input item={surname} {...surname.inputControl}/>
				<Input item={name} {...name.inputControl} />
				<Input item={patronymic} {...patronymic.inputControl} />
				<div className='flex-row'>
					<Input item={birthDate} {...birthDate.inputControl} type='tel' />
					<Input item={gender} {...gender.inputControl} />
				</div>
				<Input item={phone} {...phone.inputControl} type='tel' />
				<Dropdown fields={patients} />
				<Dropdown fields={doctors} />
			</div>
			<Checkbox
				isChecked={sendMessage[0]}
				setIsChecked={sendMessage[1]}
				placeholder='Не отправлять СМС'
			/>
			<div className='form__body '>
				<p className='form__body--title'>Адрес:</p>
				<Input item={country} {...country.inputControl} />
				<Input item={region} {...region.inputControl} />
				<Input item={city} {...city.inputControl} />
				<div className='flex-row'>
					<Input item={street} {...street.inputControl} />
					<Input item={house} {...house.inputControl} />
				</div>
				<Input item={index} {...index.inputControl} />
			</div>
			<div className='form__body form__body--documents'>
				<p className='form__body--title'>Данные:</p>
				<Dropdown fields={documentType} />
				<div className='flex-row'>
					<Input
						item={documentSeries}
						{...documentSeries.inputControl}
						type='tel'
					/>
					<Input
						item={documentNumber}
						{...documentNumber.inputControl}
						type='tel'
					/>
				</div>
				<Input item={issued} {...issued.inputControl} />
				<Input item={dateOfIssue} {...dateOfIssue.inputControl} type='tel' />
			</div>
			<Button onClick={!formValid ? getErrors : getData}>
				Создать клиента
			</Button>

		</form>
	);
};

export default Form;
