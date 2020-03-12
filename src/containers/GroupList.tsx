import React from 'react';

import Paper from './Paper';
import Groups from '../components/Groups';

const GroupList: React.FC = (): JSX.Element => (
	<div className="groups-list">
		<Paper>
			<h3 className="groups-list-title">Gruops list</h3>
			<Groups />
		</Paper>
	</div>
);

export default GroupList;
