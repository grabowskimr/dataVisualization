import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '../constants/menu';

const SideBar: React.FC = (): JSX.Element => (
	<div className="sidebar">
		<h2 className="sidebar-title">Menu</h2>
		<ul className="sidebar-menu">
			{Object.keys(Menu).map((menuItem, index: number) => (
				<li key={index}>
					<Link className="sidebar-menu-link" to={Menu[menuItem].url}>
						{Menu[menuItem].name}
					</Link>
				</li>
			))}
		</ul>
	</div>
);

export default SideBar;
