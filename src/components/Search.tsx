import React, { useState, useEffect, ChangeEvent, useRef } from 'react';

type Props = {
	handleSearch: (input: string) => void;
	handleSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
	handleEmpty?: () => void;
	types: string[];
	type: string;
};

const Search: React.FC<Props> = ({ handleEmpty, handleSearch, types, handleSelectChange, type }): JSX.Element => {
	const [searchInput, setSearchInput] = useState<string>('');
	const minValueLength = 2;
	const interval: any = useRef();

	const handeSearch = (e: ChangeEvent<HTMLInputElement>): void => {
		setSearchInput(e.target.value);
		clearTimeout(interval.current);
	};

	useEffect(() => {
		if (searchInput.length < minValueLength) {
			if (searchInput.length === 0) {
				handleEmpty && handleEmpty();
			}
			return;
		} else {
			interval.current = setTimeout(() => {
				handleSearch(searchInput);
			}, 1000);
		}

		return () => {
			clearTimeout(interval.current);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchInput]);

	return (
		<div className="search">
			<input type="text" placeholder="Search eg. CA, NY, WW" onChange={handeSearch} className="search-input"></input>
			<select name="type" onChange={handleSelectChange} value={type} className="search-select">
				{types.map((type: string) => (
					<option key={type} value={type}>
						{type}
					</option>
				))}
			</select>
		</div>
	);
};

export default Search;
