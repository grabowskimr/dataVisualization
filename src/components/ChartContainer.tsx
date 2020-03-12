import React, { useState, ChangeEvent, useEffect } from 'react';

import Chart from './Chart';
import Search from './Search';
import ChartPlaceholder from '../containers/ChartPlaceholder';
type Props = {
	data: any[];
	defaultValueInChart: string;
	chartType: string;
	maintainAspectRatio: boolean;
	label: string;
	searchBy?: string;
	showSearch?: boolean;
	title?: string;
};

const ChartContainer: React.FC<Props> = (props): JSX.Element => {
	// used redux store to cache data from api, which has a very rare update rate
	const [localData, setLocalData] = useState<any[]>([]);
	const [type, setType] = useState(props.defaultValueInChart);
	const [labels, setLabels] = useState<string[]>([]);
	const [dataTypes, setDataTypes] = useState<string[]>([]);

	useEffect(() => {
		if (props.data.length) {
			setLocalData(props.data);
			setLabels(props.data.map((record: any) => record[props.label]));
			setDataTypes(Object.keys(props.data[0]));
		}
	}, [props.data, props.label]);

	const onSearchHandler = (input: string) => {
		const searchText = input.toLowerCase().replace(/ */g, '');
		let filteredData = [];
		if (/,/gi.test(input)) {
			const searchLabels = searchText.split(/, */);
			filteredData = props.data.filter(data => {
				if (props.searchBy) {
					return searchLabels.includes(data[props.label].toLowerCase()) || searchLabels.includes(data[props.searchBy].toLowerCase());
				} else {
					return searchLabels.includes(data[props.label].toLowerCase());
				}
			});
		} else {
			filteredData = props.data.filter(data => {
				if (props.searchBy) {
					return data[props.searchBy].toLowerCase() === searchText;
				} else {
					return data[props.label].toLowerCase() === searchText;
				}
			});
		}
		if (filteredData.length) {
			setLabels(filteredData.map((record: any) => record[props.label]));
			setLocalData(filteredData);
		}
	};

	const onEmptyInput = () => {
		setLabels(props.data.map((record: any) => record[props.label]));
		setLocalData(props.data);
	};

	const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setType(e.target.value);
	};

	return (
		<div className={`chart-container ${props.showSearch ? 'search' : ''}`}>
			{localData.length ? (
				<>
					{props.title ? <h3 className="chart-container-title">{props.title}</h3> : null}
					{props.showSearch ? (
						<div className="chart-container-search">
							<Search
								handleSearch={onSearchHandler}
								handleEmpty={onEmptyInput}
								types={dataTypes}
								handleSelectChange={onSelectChange}
								type={type}
							/>
						</div>
					) : (
						<p className="chart-container-type">{type}</p>
					)}
					<Chart
						data={localData}
						labels={labels}
						displayByValue={type}
						chartType={props.chartType}
						maintainAspectRatio={props.maintainAspectRatio}
					/>
				</>
			) : (
				<ChartPlaceholder />
			)}
		</div>
	);
};

export default ChartContainer;
