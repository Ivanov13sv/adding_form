import './style.scss';

const ErrorMessage = (props) => {
	return (
		<>
			<span className='error_message'>{props.message}</span>
		</>
	);
};

export { ErrorMessage };
