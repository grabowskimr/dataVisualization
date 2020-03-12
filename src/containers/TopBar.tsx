import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { appTitle } from '../constants/config';
import { toggleMenu } from '../actions/reduxActions';

const TopBar: React.FC = (): JSX.Element => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(toggleMenu());
	};

	return (
		<div className="topbar">
			<button className="topbar-toggle-menu" onClick={handleClick}>
				<span className="material-icons">menu</span>
			</button>
			<h1 className="topbar-title">
				<Link to="/">{appTitle}</Link>
			</h1>
		</div>
	);
};

export default TopBar;
