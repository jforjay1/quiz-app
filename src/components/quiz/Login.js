import React, { useState } from 'react';
import axios from 'axios';

function Login() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = (e) => {
		e.preventDefault();
		axios.get('http://localhost:3003/users?username=' + username + '&password=' + password)
			.then((response) => {
				if (response.data.length > 0) {
					setIsLoggedIn(true);
				} else {
					alert('Invalid username or password');
				}
			})
			.catch(() => {
				alert('An error occurred while trying to login');
			});
	};

	const handledLogin = () => {
		if (isLoggedIn) {
			window.location.href = '/play/quiz';
		}
	};

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleLogin}>
				<label>
						Username:
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</label>
				<br />
				<label>
						Password:
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				<br />
				<button type="submit" onClick={handledLogin}>Login</button>
			</form>
		</div>
	);
}

export default Login;
