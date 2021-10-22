import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
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
		</header>
	);
}

export default Navbar;
