import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Layout from '../containers/Layout';
import Routing from '../containers/Routing';
import { Provider } from 'react-redux';
import store from '../reducers/appReducer';

const App: React.FC = (): JSX.Element => {
	const history = createBrowserHistory();

	return (
		<Provider store={store}>
			<div className="app">
				<Router history={history}>
					<Layout>
						<Routing />
					</Layout>
				</Router>
			</div>
		</Provider>
	);
};

export default App;
