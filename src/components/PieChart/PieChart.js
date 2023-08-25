import React from 'react'
import Chart from 'chart.js/auto'
import './PieChart.css'

const ShadowPlugin = {
	beforeDatasetsDraw: (chart) => {
		const { ctx } = chart;
		ctx.shadowColor = "rgba(0,0,0,0.1)";
		ctx.shadowBlur = 5;
		ctx.shadowOffsetX = 1;
		ctx.shadowOffsetY = 1;
	}
}

const ChartBackgroundPlugin = {
	id: 'chartBackground',
	beforeDatasetsDraw: (chart) => {
		const {ctx, config} = chart;
		ctx.save();

		config.data.datasets.forEach((c,i) => {
			const xCoor = chart.getDatasetMeta(i).data[0].x;
			const yCoor = chart.getDatasetMeta(i).data[0].y;
			const innerRadius = chart.getDatasetMeta(i).data[0].innerRadius;
			const outerRadius = chart.getDatasetMeta(i).data[0].outerRadius;
			const width = outerRadius - innerRadius;
			const angle = Math.PI / 180;

			ctx.beginPath();
			ctx.lineWidth = width;
			ctx.strokeStyle = c.borderColor;
			ctx.arc(xCoor, yCoor, outerRadius - width / 2, 0, angle * 360);
			ctx.stroke();
		});
	}
}

const createChartData = (charts) => {
	const datasets = [
		{
			data: [100],
			backgroundColor: [
				"rgba(0,0,0,0)"
			],
			borderColor: "rgba(0,0,0,0)",
			weight: .1
		}
	];
	charts.forEach((chart) => {
		datasets.push({
			label: chart.label,
			data: chart.series.map((series) => series.value / chart.total * 100),
			backgroundColor: chart.colors.map((color) => color),
			hoverBackgroundColor: chart.colors.map((color) => color),
			borderColor: chart.backgroundColor,
			circumference: (ctx) => {
				if(ctx.dataset.data.length === 2) {
					return ((ctx.dataset.data[0] + ctx.dataset.data[1]) / 100) * 360;
				}
				return (ctx.dataset.data[0] / 100) * 360;
			}
		})
	})
	return datasets;
}

const PieChart = ({charts}) => {
	const chart = React.useRef(null)
	const chartPlaceholder = React.useRef(null);

	React.useEffect(() => {
		if (chartPlaceholder.current !== null) {

			const datasets = createChartData(charts)

			const ctx = chartPlaceholder.current.getContext('2d')
			chart.current = new Chart(ctx, {
				type: 'doughnut',
				data: {
					datasets: datasets
				},
				options: {
					responsive: true,
					maintainAspectRatio: false,
					cutout: '55%',
					borderWidth: 0,
					borderRadius: 30,
					layout: {
						padding: 0
					},
					plugins: {
						tooltip: {
							enabled: false
						},
						title: {
							display: false,
						}
					}
				},
				plugins: [ChartBackgroundPlugin, ShadowPlugin]
			})
		}
		return () => {
			if(chart.current !== null) {
				chart.current.destroy()
			}
		}
	},[charts])


	React.useEffect(() => {
		if (chart.current !== null) {
			chart.current.data.datasets = createChartData(charts)
			chart.current.update();
		}
	}, [charts])

	return(
		<div className="PieChart">
			<canvas ref={chartPlaceholder}></canvas>
		</div>
	)
}

export default PieChart