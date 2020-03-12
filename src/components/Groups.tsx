import React, { useState, useEffect } from 'react';

import { getGroups } from '../actions/apiCalls';

const Groups: React.FC = (): JSX.Element => {
	const [groups, setGroups] = useState<string[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await getGroups();

			if (data.length) {
				setGroups(data);
			}
		};

		fetchData();

		return () => {
			setGroups([]);
		};
	}, []);

	return (
		<>
			{groups.length ? (
				<ul className="groups">
					{groups.map((group: string, index: number) => (
						<li key={index}>{group}</li>
					))}
				</ul>
			) : (
				<div className="loader">Loading...</div>
			)}
		</>
	);
};

export default Groups;
