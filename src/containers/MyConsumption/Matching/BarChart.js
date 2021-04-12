import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const BarChart = ({consumptionMatching}) => {

	let options = {
		title: {
			text: ''
		},
		credits: {
			enabled: false
		},
		plotOptions: {
			areaspline: {
				stacking: 'normal',
				fillOpacity: .75,
				lineWidth: 0,
				marker: {
					enabled: false
				}
			},
			column: {
				borderWidth: 0,
				stacking: 'normal',
				borderRadius: 0
			},
			spline: {
				marker: {
					enabled: false
				}
			}
		},
		xAxis: {
			labels: {
				enabled: true
			},
			categories: [
				'Jan',
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
				'Oct',
				'Nov',
				'Dec'
			],
			crosshair: true
		},
		yAxis: {
			title: {
				text: ''
			},
			gridLineWidth: 0,
			labels: {
				enabled: false
			}
		},
		chart: {
			type: 'column'
		},
		tooltip: {
			shared: true,
			valueSuffix: ' GWh'
		},
		series: [
			{
				name: 'Wind power',
				data: consumptionMatching.wind,
				color: '#00BA6C'
			},
			{
				name: 'Solar power',
				data: consumptionMatching.solar,
				color: '#F0C659'
			},
			{
				name: 'Hydro power',
				data: consumptionMatching.hydro,
				color: '#0AC5D1'
			},
			{
				name: 'Total',
				data: consumptionMatching.total,
				type: 'spline',
				color: '#04003A'
			},
			{
				name: 'Forecast',
				data: consumptionMatching.forecast,
				type: 'line',
				visible: false,
				color: '#F3372A'
			}
		],
		responsive: {
			rules: [{
				condition: {
					maxWidth: 500
				},
				chartOptions: {
					legend: {
						enabled: true
					}
				}
			}]
		}
	}

	return(
		<HighchartsReact
			highcharts={Highcharts}
			constructorType={'chart'}
			options={options}
		/>
	)
}

export default BarChart