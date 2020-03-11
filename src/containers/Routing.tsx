import React from 'react';
import { Switch, Route } from 'react-router-dom';

import menu from '../constants/menu';
import Home from './Home';

const Routing: React.FC = (): JSX.Element => (
	<Switch>
		<Route exact path={menu.home.url} component={Home} />
	</Switch>
);

export default Routing;
