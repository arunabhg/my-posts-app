import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
	const [show, setShow] = useState(false);

	return (
		<header className='navMenu'>
			<NavLink exact to='/' className='navLink' activeClassName='activeRoute'>
				Home
			</NavLink>
			<NavLink to='/custom' className='navLink' activeClassName='activeRoute'>
				Custom Hook
			</NavLink>
			<NavLink to='/hoc' className='navLink' activeClassName='activeRoute'>
				HOC
			</NavLink>
			<NavLink to='/dashboard' className='navLink' activeClassName='activeRoute'>
				Dashboard
			</NavLink>
			<NavLink to='/login' className='navLink'>
				<button onClick={() => setShow(true)}>Login</button>
			</NavLink>
		</header>
	);
}

export default Navbar;
