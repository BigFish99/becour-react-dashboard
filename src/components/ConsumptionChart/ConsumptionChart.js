import React from 'react'
import './ConsumptionChart.css'
import { connect } from 'react-redux'
import { BeatLoader } from 'react-spinners'
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
			height: 280,
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
					enabled: false
				 }
			  }
			}]
		 }
	}

	return (
		<div className="ConsumptionChart">
			<div className="chart">
				{
					loading
						? <BeatLoader color="currentColor" size={10} />
						: chart.length > 0
							? <HighchartsReact
								highcharts={Highcharts}
								constructorType={'chart'}
								options={options}
							/>
							: <p>No data</p>
				}
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	loading: state.frontpage.loading,
	chart: state.frontpage.tiles.chart.series
})

export default connect(mapStateToProps, null)(ConsumptionChart)