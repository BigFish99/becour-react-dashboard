import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import HSIndicators from 'highcharts/indicators/indicators'
HSIndicators(Highcharts)

const StockChart = ({consumptionMatching}) => {

	const dataGrouping = {
		units: [
			['hour', [1, 7]],
			['day', [1, 7]],
			['month', [1]],
			['year', null]
	  ],
	  groupPixelWidth: 50,
	  approximation: 'sum'
  }

	const options = {
		chart: {
			type: 'column',
			alignTicks: true
		},
		title: {
			text: null
		},
		plotOptions: {
			column: {
				stacking: 'normal',
				dataLabels: {
					enabled: false
				}
			}
		},
		legend: {
			enabled: true
		},
		tooltip: {
			shared: true,
			valueSuffix: ' MWh'
		},
		rangeSelector: {
			allButtonsEnabled: true,
			buttonTheme: { // styles for the buttons
				fill: 'none',
				width: 60,
				stroke: 'none',
				'stroke-width': 0,
				r: 8,
				style: {
					color: '#48AD4E',
					fontWeight: 'bold'
				},
				states: {
					hover: {
					},
					select: {
						fill: '#48AD4E',
						style: {
							color: 'white'
						}
					}
				}
			},
			buttons: [
				{
					type: 'moth',
					text: 'Month',
					count: 1
				},
				{
					type: 'week',
					text: 'Week',
					count: 1,
				},
				{
					type: 'hour',
					text: 'Hour',
					count: 24,
				}
			]
		},
		series: [
			{
				name: 'Wind power',
				data: consumptionMatching.wind,
				color: '#00BA6C',
				dataGrouping: dataGrouping
			},
			{
				name: 'Solar power',
				data: consumptionMatching.solar,
				color: '#F0C659',
				dataGrouping: dataGrouping
			},
			{
				name: 'Hydro power',
				data: consumptionMatching.hydro,
				color: '#0AC5D1',
				dataGrouping: dataGrouping
			},
			{
				name: 'Total',
				data: consumptionMatching.total,
				type: 'spline',
				color: '#04003A',
				dataGrouping: dataGrouping
			}
		]
	}

	return(
		<HighchartsReact
			options={options}
			highcharts={Highcharts}
			constructorType={'stockChart'}
		/>
	)
}

export default StockChart