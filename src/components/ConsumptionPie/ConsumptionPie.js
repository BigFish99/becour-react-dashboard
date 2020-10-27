import React from 'react'
import './ConsumptionPie.css'
import {connect} from 'react-redux'
import {BeatLoader} from 'react-spinners'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const ConsumptionPie = ({renewable, nonRenewable, loading}) => {

	let options = {
		title: {
			text: ''
		},
		credits: {
			enabled: false
		},
		chart: {
			type: 'pie',
			height: 200
		},
		tooltip: {
			enabled: false
	  },
		plotOptions: {
			pie: {
				 allowPointSelect: false,
				 cursor: 'pointer',
				 dataLabels: {
					 format: '{point.y}%',
					  enabled: false,
				 },
				 showInLegend: false
			}
	  },
		series: [{
			name: '',
			innerSize: '30%',
			states: {
				hover: {
					enabled: false
				}
			},
			data: [{
				name: 'Renewable',
				color: '#48AD4E',
				y: Math.round(renewable / (renewable + nonRenewable) * 100)
			},
			{
				name: 'Non renewable',
				y: Math.round(nonRenewable / (renewable + nonRenewable) * 100)
			}]
		}]
	}

	return(
		<div className="ConsumptionPie">
			<div className="pie">
				{
					loading
					? <BeatLoader color="currentColor" size={10} />
					: renewable !== undefined && nonRenewable !== undefined
						?  <HighchartsReact
								highcharts={Highcharts}
								constructorType={'chart'}
								options={options}
							/>
						: <p>No data</p>
				}
			</div>
			<div className="ConsumptionPie-content">
				<p className="percent">{Math.round(renewable / (renewable + nonRenewable) * 100)}%</p>
				<p className="title">Renewable energy</p>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	renewable: state.frontpage.tiles.renewable,
	nonRenewable: state.frontpage.tiles.nonRenewable,
	loading: state.frontpage.loading
})

export default connect(mapStateToProps, null)(ConsumptionPie)