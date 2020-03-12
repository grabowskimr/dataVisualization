import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { clearPackageSearchResults } from '../actions/reduxActions';

const PackagesList: React.FC = (): JSX.Element => {
	const packages = useSelector((state: ReduxState) => state.packages);
	const loaderVisible = useSelector((state: ReduxState) => state.loaderVisible);
	const dispatch = useDispatch();

	useEffect(() => {
		return () => {
			dispatch(clearPackageSearchResults());
		};
	}, [dispatch]);

	return (
		<div className="packages-list">
			{packages.length && !loaderVisible ? (
				<table className="packages-table">
					<thead>
						<tr>
							<th>Title</th>
							<th>Maintainer</th>
							<th>Mmintainer email</th>
						</tr>
					</thead>
					<tbody>
						{packages.map((pck: Package) => (
							<tr key={pck.id}>
								<td>{pck.title}</td>
								<td>{pck.maintainer}</td>
								<td>{pck.maintainer_email}</td>
							</tr>
						))}
					</tbody>
				</table>
			) : loaderVisible ? (
				<div className="loader">Loading...</div>
			) : null}
		</div>
	);
};

export default PackagesList;
