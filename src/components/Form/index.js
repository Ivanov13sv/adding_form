import React, { useState } from 'react';
import Input from '../UI/Input';
import Container from '../Container/Container';
import Dropdown from '../UI/Dropdown';
import './style.scss';

const Form = () => {
	const [selected, setSelected] = useState('*Группа клиентов');
	const clientsOptions = ['VIP', 'ОМС', 'Проблемные'];

	return (
		<form className='form'>
			<Container>
				<div className='personal_info'>
					<Input placeholder={'*Фамилия'} />
					<Input placeholder={'*Имя'} />
					<Input placeholder={'Отчество'} />
					<div className='inputs_row'>
						<Input placeholder={'*Дата рождения'} />
						<Input placeholder={'*Пол'} />
					</div>
					<Input placeholder={'*Номер телефона'} />
				</div>
				<Dropdown
					placeholder={'*Группа клиентов'}
					selected={selected}
					setSelected={setSelected}
					clientsOptions={clientsOptions}
				/>
				{/* <Dropdown placeholder={'*Группа клasdasdнтов'} /> */}
			</Container>
		</form>
	);
};

export default Form;
