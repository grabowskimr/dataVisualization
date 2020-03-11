import React from 'react';

import TopBar from './TopBar';
import SideBar from './SideBar';

const Layout: React.FC = (props): JSX.Element => (
	<div className="layout">
		<TopBar />
		<SideBar />
		<div className="main">{props.children}</div>
	</div>
);

export default Layout;
