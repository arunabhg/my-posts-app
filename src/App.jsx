import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PostWrapper from './PostWrapper';
import Navbar from './Navbar';
import Custom from './Custom';
import HOC from './hoc/hoc';

function App() {
	return (
		<main>
			<Navbar />
			<Switch>
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
