import React from 'react';
import { Switch, Route } from 'react-router-dom';

import menu from '../constants/menu';
import Home from './Home';
import GroupList from './GroupList';
import Packages from './Packages';

const Routing: React.FC = (): JSX.Element => (
	<Switch>
		<Route exact path={menu.home.url} component={Home} />
		<Route exact path={menu.groups.url} component={GroupList} />
		<Route exact path={menu.packages.url} component={Packages} />
	</Switch>
);

export default Routing;
