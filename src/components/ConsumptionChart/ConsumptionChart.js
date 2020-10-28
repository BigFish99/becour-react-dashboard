import React from 'react'
import './ConsumptionChart.css'
import { connect } from 'react-redux'
import Loader from '../Loader/Loader'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const ConsumptionChart = ({ chart, loading }) => {

	let options = {
		title: {
			text: ''
		},
		credits: {
			enabled: false
		},
		colors: ['#48AD4E', '#ccc'],
		plotOptions: {
			series: {
				borderWidth: 0,
				pointPadding: 0
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
			enabled: true
		},
		series: chart,
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

	return (
		<div className="ConsumptionChart">
			{
				loading
					? <Loader />
					: chart.length > 0
						? 	<div className="ConsumptionChart-chart">
								<HighchartsReact
									highcharts={Highcharts}
									constructorType={'chart'}
									options={options}
								/>
							</div>
						: <p>No data</p>
			}
		</div>
	)
}

const mapStateToProps = state => ({
	loading: state.frontpage.loading,
	chart: state.frontpage.tiles.chart.series
})

export default connect(mapStateToProps, null)(ConsumptionChart)