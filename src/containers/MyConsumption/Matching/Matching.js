import React from 'react'
import {connect} from 'react-redux'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import HSIndicators from 'highcharts/indicators/indicators'
import './Matching.css'
HSIndicators(Highcharts)

const Matching = ({consumptionMatching, loading}) => {

	const options = {
		chart: {
			type: 'column',
			alignTicks: false
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
					type: 'day',
					text: 'Default',
					count: 3
				},
				{
					type: 'day',
					text: 'Day',
					count: 1,
					dataGrouping: {
						forced: false,
						units: [['day', [1]]]
					}
				},
				{
					type: 'hour',
					text: 'Hour',
					count: 3,
					dataGrouping: {
						forced: false,
						units: [['hour', [1, 2, 3, 4, 6, 12]]]
					}
				}
			]
		},
		xAxis: {
			range: 3 * 24 * 3600000,
			maxRange: 3 * 24 * 3600000,
			minRange: 5 * 3600000
		},
		series: [
			{
				name: 'Total',
				data: consumptionMatching.total,
				type: 'spline',
				color: '#48AD4E'
			},
			{
				name: 'Wind power',
				data: consumptionMatching.wind,
				color: '#48AD4E'
			},
			{
				name: 'Solar power',
				data: consumptionMatching.solar,
				color: '#FDB813'
			},
			{
				name: 'Hydro power',
				data: consumptionMatching.hydro,
				color: '#6daaee'
			}
		]
	}

	return (
		<div className="Consumption-Matching content-box">
			<div className={loading ? 'chart loading' : 'chart'}>
				<HighchartsReact
					options={options}
					highcharts={Highcharts}
					constructorType={'stockChart'}
				/>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	consumptionMatching: state.consumption.consumptionMatching,
	loading: state.consumption.loading
})

export default connect(mapStateToProps, null)(Matching)