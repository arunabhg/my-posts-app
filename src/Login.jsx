import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { setUserSession } from './utils/Common';

function LoginForm(props) {
	// const [show, setShow] = useState(props.show);

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleLogin = () => {
		setError(null);
		setLoading(true);
		axios
			.post('http://localhost/4000/users/signin', { username: username, password: password })
			.then((response) => {
				setLoading(false);
				console.log(response.data);
				setUserSession(response.data.token, response.data.user);
				props.history.push('/dashboard');
			})
			.catch((error) => {
				setLoading(false);
				if (error.response.status === 401) setError(error.response.data.message);
				else setError('Something went wrong. Please try again later.');
			});
	};

	return (
		<div className='login'>
			<h3>Login</h3>
			<br />
			<div>
				Username
				<br />
				<input type='text' {...username} autoComplete='new-password' />
			</div>
			<div style={{ marginTop: 10 }}>
				Password
				<br />
				<input type='password' {...password} autoComplete='new-password' />
			</div>
			{error && (
				<>
					<small style={{ color: 'red' }}>{error}</small>
					<br />
				</>
			)}
			<br />
			<input
				type='button'
				value={loading ? 'Loading...' : 'Login'}
				onClick={handleLogin}
				disabled={loading}
			/>
			<br />
		</div>
	);
}

const useFormInput = (initialValue) => {
	const [value, setValue] = useState(initialValue);

	const handleChange = (e) => {
		setValue(e.target.value);
	};
	return {
		value,
		onChange: handleChange
	};
};

export default LoginForm;
