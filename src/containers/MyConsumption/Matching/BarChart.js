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
		series: consumptionMatching.series,
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