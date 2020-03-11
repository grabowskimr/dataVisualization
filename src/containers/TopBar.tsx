import React from 'react';
import { Link } from 'react-router-dom';

import { appTitle } from '../constants/config';

const TopBar: React.FC = (): JSX.Element => (
	<div className="topbar">
		<button className="topbar-toggle-menu">
			<span className="material-icons">menu</span>
		</button>
		<h1 className="topbar-title">
			<Link to="/">{appTitle}</Link>
		</h1>
	</div>
);

export default TopBar;
