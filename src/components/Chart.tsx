import React, { useRef, useEffect } from 'react';
import ChartJS from 'chart.js';

type Props = {
	data: any;
	labels: any;
	displayByValue: string;
	chartType: string;
	maintainAspectRatio?: boolean;
};

const Chart: React.FC<Props> = ({ data, labels, displayByValue, chartType, maintainAspectRatio }) => {
	const canvas = useRef<HTMLCanvasElement>(null);
	const chartWithBg = chartType === 'polarArea' || chartType === 'bar' || chartType === 'pie';
	let myChart: any = useRef();

	useEffect(() => {
		if (myChart.current) {
			myChart.current.data.labels = labels;
			myChart.current.data.datasets[0].label = displayByValue;
			myChart.current.data.datasets[0].data = data.map((record: any) => record[displayByValue]);
			if (!myChart.current.data.datasets[0].backgroundColor.length) {
				myChart.current.data.datasets[0].backgroundColor = chartWithBg ? data.map(() => getRandomColor()) : 'transparent';
			}
			myChart.current.update();
		}
	}, [chartWithBg, data, displayByValue, labels]);

	useEffect(() => {
		if (canvas.current) {
			initchart();
		}
		return () => {
			console.log('des');
			myChart.current.destroy();
			myChart.current = null;
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [myChart]);

	const getRandomColor = () => {
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	};

	const initchart = () => {
		if (!canvas.current) {
			return;
		}
		const ctx: any = canvas.current.getContext('2d');
		myChart.current = new ChartJS(ctx, {
			type: chartType,
			data: {
				labels: labels,
				datasets: [
					{
						label: displayByValue,
						data: data.map((record: any) => record[displayByValue]),
						backgroundColor: chartWithBg ? data.map(() => getRandomColor()) : 'transparent',
						borderWidth: !chartWithBg ? 1 : 0,
						borderColor: !chartWithBg ? getRandomColor() : ''
					}
				]
			},
			options: {
				maintainAspectRatio: maintainAspectRatio,
				scales: {
					yAxes: [
						{
							ticks: {
								beginAtZero: true
							}
						}
					]
				}
			}
		});
	};

	return <canvas ref={canvas} />;
};

export default Chart;
