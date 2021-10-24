import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import PostWrapper from './PostWrapper';
import Navbar from './Navbar';
import Custom from './Custom';
import HOC from './hoc/hoc';
import LoginForm from './Login';
import Dashboard from './Dashboard';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './utils/Common';

function App() {
	const [authLoading, setAuthLoading] = useState(true);

	useEffect(() => {
		const token = getToken();
		if (!token) {
			return;
		}

		axios
			.get(`http://localhost:4000/verifyToken?token=${token}`)
			.then((response) => {
				setUserSession(response.data.token, response.data.user);
				setAuthLoading(false);
			})
			.catch((error) => {
				removeUserSession();
				setAuthLoading(false);
			});
	}, []);

	if (authLoading && getToken()) {
		return <div className='content'>Checking Authentication...</div>;
	}

	return (
		<main>
			<Navbar />
			<Switch>
				<PublicRoute path='/login' component={LoginForm} />
				<PrivateRoute path='/dashboard' component={Dashboard} />
				<Route path='/custom'>
					<Custom />
				</Route>
				<Route path='/hoc'>
					<HOC />
				</Route>
				<Route path='/'>
					<PostWrapper postTitle='My Posts' pageTitle='My Post App' />;
				</Route>
			</Switch>
		</main>
	);
}

// function Home() {
// 	return <h2>Home</h2>;
//   }

export default App;
