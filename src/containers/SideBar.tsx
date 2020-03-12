import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import menu from '../constants/menu';
import { toggleMenu } from '../actions/reduxActions';

const SideBar: React.FC = (): JSX.Element => {
	const menuVisible = useSelector((store: ReduxState) => store.toggleMenu);
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(toggleMenu());
	};

	return (
		<div className={`sidebar ${menuVisible ? 'show' : ''}`}>
			<h2 className="sidebar-title">Menu</h2>
			<ul className="sidebar-menu">
				{Object.keys(menu).map((menuItem, index: number) => (
					<li key={index}>
						<Link className="sidebar-menu-link" to={menu[menuItem].url} onClick={handleClick}>
							{menu[menuItem].name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SideBar;
