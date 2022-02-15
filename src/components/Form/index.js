import React, { useState } from 'react';
import Input from '../UI/Input';
import Container from '../Container/Container';
import Dropdown from '../UI/Dropdown';
import { useInput } from '../../hooks/useInput';
import { Checkbox } from '../UI/Checkbox';
import { Button } from '../UI/Button';
import './style.scss';
import { useDropdown } from '../../hooks/useDropdown';

const Form = () => {
	const [sendMessage, setSendMessage] = useState(false);

	const formFields = {
		surname: useInput('', { isEmpty: true }),
		test: useInput('', {isDate: true}),
		name: useInput('', { isEmpty: true, maxLength: 10 }),
		patronymic: useInput(''),
		patients: useDropdown('*Группа клиентов', ['VIP', 'ОМС', 'Проблемные']),
		doctors: useDropdown('*Лечащий врач', [
			'Иванов А. А.',
			'Захаров С.В.',
			'Чернышева Ю.Н.',
		]),
		documents: useDropdown('*Тип документа', [
			'Паспорт',
			'Свидетельство о рождении',
			'Водительское удостоверение',
		]),
	};
	

	const { surname, name, test, patients, doctors, documents, patronymic } = formFields;

	console.log(test)

	return (
		<form className='form'>
			<Container>
				<div className='personal_info'>
					<Input
						value={surname.value}
						onChange={surname.onChange}
						onBlur={surname.onBlur}
						placeholder={'*Фамилия'}
					/>
					{surname.isDirty && surname.isEmpty && (
						<div>{surname.errorMessage}</div>
					)}
					<Input
						value={name.value}
						onChange={name.onChange}
						onBlur={name.onBlur}
						placeholder={'*Имя'}
					/>
					{name.isDirty && name.isEmpty && (
						<div>{name.errorMessage}</div>
					)}
					{name.isDirty && name.maxLengthError && (
						<div>{name.errorMessage}</div>
					)}
					<Input value={patronymic.value} onChange={patronymic.onChange} placeholder={'Отчество'} />
					<div className='inputs_row'>
						<Input placeholder={'*Дата рождения'} />
						<Input placeholder={'*Пол'} />
					</div>
					<Input type='tel' placeholder={'*Номер телефона'} />
					<Dropdown fields={patients} />
					<Dropdown fields={doctors} />
				</div>
				<Checkbox
					isChecked={sendMessage}
					setIsChecked={setSendMessage}
					placeholder='Не отправлять СМС'
				/>
				<div className='block block__adress'>
					<p className='block__title'>Адрес:</p>
					<Input placeholder='Страна' />
					<Input placeholder='Область' />
					<Input placeholder='*Город' />
					<div className='inputs_row'>
						<Input placeholder='Улица' />
						<Input placeholder='Дом' />
					</div>
					<Input placeholder='Индекс' />
				</div>
				<div className='block block__documents'>
					<p className='block__title'>Данные:</p>
					<Dropdown fields={documents} />
					<div className='inputs_row'>
						<Input type='tel' placeholder='Серия' />
						<Input type='tel' placeholder='Номер' />
					</div>

					<Input placeholder='Кем выдан' />
					<Input placeholder='*Дата выдачи' />
				</div>
				<Button>Создать клиента</Button>
				<Input
					placeholder='test data'
					type='tel'
					value={test.value}
					onChange={test.onChange}

				/>
				{(test.isDirty && test.isEmpty) && <div>{test.errorMessage}</div>}
			</Container>
		</form>
	);
};

export default Form;
