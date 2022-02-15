import React, { useState } from 'react';
import Input from '../UI/Input';
import Container from '../Container/Container';
import Dropdown from '../UI/Dropdown';
import { useInput } from '../../hooks/useInput';
import { Checkbox } from '../UI/Checkbox';
import { Button } from '../UI/Button';
import './style.scss';
import { useDropdown } from '../../hooks/useDropdown';
import Dropdowntest from '../UI/Dropdown_copy';

const Form = () => {
	const [selectedPatient, setSelectedPatient] = useState('*Группа клиентов');
	const [selectedDoctor, setSelectedDoctor] = useState('*Лечащий врач');
	const [selectedDocument, setSelectedDocument] = useState('*Тип документа');
	const clientsOptions = ['VIP', 'ОМС', 'Проблемные'];
	const doctorsOptions = ['Иванов А. А.', 'Захаров С.В.', 'Чернышева Ю.Н.'];
	const documentsOptions = [
		'Паспорт',
		'Свидетельство о рождении',
		'Водительское удостоверение',
	];
	const [isChecked, setIsChecked] = useState(false);
	const patients = useDropdown('*Группа кавота', [
		'Vjip',
		'ОvvvМС',
		'Прмные',
	]);
	const doctors = useDropdown('*Врачи', ['Ivanov', 'petrov', 'jopaasdd'])

	const surname = useInput('', { isEmpty: true });
	const name = useInput('', { isEmpty: true, maxLength: 10 });

	const showForm = (e) => {
		e.preventDefault();
	};

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
						<div>{name.errorMessage}</div>
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
					<Input placeholder={'Отчество'} />
					<div className='inputs_row'>
						<Input type='text' placeholder={'*Дата рождения'} />
						<Input placeholder={'*Пол'} />
					</div>
					<Input type='number' placeholder={'*Номер телефона'} />
					<Dropdown
						selected={selectedPatient}
						setSelected={setSelectedPatient}
						options={clientsOptions}
					/>
					<Dropdown
						selected={selectedDoctor}
						setSelected={setSelectedDoctor}
						options={doctorsOptions}
					/>
					{/* test below */}
					<Dropdowntest fields={patients} />
				</div>
				<Checkbox
					isChecked={isChecked}
					setIsChecked={setIsChecked}
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
					<Dropdown
						options={documentsOptions}
						setSelected={setSelectedDocument}
						selected={selectedDocument}
					/>
					<div className='inputs_row'>
						<Input placeholder='Серия' />
						<Input placeholder='Номер' />
					</div>

					<Input placeholder='Кем выдан' />
					<Input placeholder='*Дата выдачи' />
				</div>
				<Button onClick={showForm}>Создать клиента</Button>

				<Dropdowntest fields={doctors} />
			</Container>
		</form>
	);
};

export default Form;
