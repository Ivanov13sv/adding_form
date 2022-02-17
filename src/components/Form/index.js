import React, { useEffect, useState } from 'react';
import Input from '../UI/Input';
import Container from '../Container/Container';
import Dropdown from '../UI/Dropdown';
import { useInput } from '../../hooks/useInput';
import { Checkbox } from '../UI/Checkbox';
import { Button } from '../UI/Button';
import './style.scss';
import { useDropdown } from '../../hooks/useDropdown';

const Form = () => {
	const [formValid, setFormValid] = useState(false);

	const formFields = {
		surname: useInput('', { isEmpty: true }),
		name: useInput('', { isEmpty: true }),
		patronymic: useInput(''),
		birthDate: useInput('', { isEmpty: true, isDate: true }),
		gender: useInput('', { isEmpty: true }),
		phone: useInput('', { isPhone: true }),
		patients: useDropdown('*пациенты', ['VIP', 'ОМС', 'Проблемные'], {
			isEmpty: true,
		}),
		doctors: useDropdown(
			'*Лечащий врач',
			['Иванов А. А.', 'Захаров С.В.', 'Чернышева Ю.Н.'],
			{
				isEmpty: true,
			}
		),
		sendMessage: useState(false),
		country: useInput(''),
		region: useInput(''),
		city: useInput('', { isEmpty: true }),
		street: useInput(''),
		house: useInput(''),
		index: useInput('', { isNumber: true }),
		documentType: useDropdown('*Тип документа', [
			'Паспорт',
			'Свидетельство о рождении',
			'Водительское удостоверение',
		]),

		documentSeries: useInput(''),
		documentNumber: useInput(''),
		issued: useInput(''),
		dateOfIssue: useInput('', { isEmpty: true, isDate: true }),
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

	//

	// useMemo(() =>{

	// },[formFields])

	useEffect(() => {
		if (
			surname.isEmpty ||
			name.isEmpty ||
			birthDate.isEmpty ||
			gender.isEmpty ||
			phone.isEmpty ||
			patients.isEmpty ||
			doctors.isEmpty ||
			city.isEmpty ||
			documentType.isEmpty ||
			dateOfIssue.isEmpty
		) {
			setFormValid(false);
		} else {
			setFormValid(true);
		}

		for (let key in formFields) {
			if (formFields[key].isEmpty) {
				setFormValid(false);
			} else {
				setFormValid(true);
			}
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

	return (
		<form className='form'>
			<Container>
				<div className='personal_info'>
					<Input {...surname.inputControl} placeholder={'*Фамилия'} />

					{/* {surname.isDirty && surname.isEmpty && (
						<div>{surname.errorMessage}</div>
					)} */}

					<Input {...name.inputControl} placeholder={'*Имя'} />
					{name.isDirty && name.isEmpty && (
						<div className='errorBlock'>{name.errorMessage}</div>
					)}
					<Input
						{...patronymic.inputControl}
						placeholder={'Отчество'}
					/>
					<div className='inputs_row'>
						<Input
							{...birthDate.inputControl}
							placeholder={'*Дата рождения'}
						/>
						{birthDate.isDirty && birthDate.isEmpty && (
							<div>{birthDate.errorMessage}</div>
						)}
						<Input {...gender.inputControl} placeholder={'*Пол'} />
						{gender.isDirty && gender.isEmpty && (
							<div>{gender.errorMessage}</div>
						)}
					</div>
					<Input
						{...phone.inputControl}
						type='tel'
						placeholder={'*Номер телефона'}
					/>

					<Dropdown fields={patients} />
					{patients.isDirty && patients.isEmpty && (
						<div>{patients.errorMessage}</div>
					)}
					<Dropdown fields={doctors} />
				</div>
				<Checkbox
					isChecked={sendMessage[0]}
					setIsChecked={sendMessage[1]}
					placeholder='Не отправлять СМС'
				/>
				<div className='block block__adress'>
					<p className='block__title'>Адрес:</p>
					<Input {...country.inputControl} placeholder='Страна' />
					<Input {...region.inputControl} placeholder='Область' />
					<Input {...city.inputControl} placeholder='*Город' />
					<div className='inputs_row'>
						<Input {...street.inputControl} placeholder='Улица' />
						<Input {...house.inputControl} placeholder='Дом' />
					</div>
					<Input {...index.inputControl} placeholder='Индекс' />
				</div>
				<div className='block block__documents'>
					<p className='block__title'>Данные:</p>
					<Dropdown fields={documentType} />
					<div className='inputs_row'>
						<Input
							{...documentSeries.inputControl}
							type='tel'
							placeholder='Серия'
						/>
						<Input
							{...documentNumber.inputControl}
							type='tel'
							placeholder='Номер'
						/>
					</div>

					<Input {...issued.inputControl} placeholder='Кем выдан' />
					<Input
						{...dateOfIssue.inputControl}
						placeholder='*Дата выдачи'
					/>
				</div>
				<div>{formValid}</div>
				<Button onClick={getData} disabled={!formValid}>
					Создать клиента
				</Button>
			</Container>
		</form>
	);
};

export default Form;
