import React from 'react'
import './ConsumptionMap.css'
import { connect } from 'react-redux'
import Loader from '../../../../components/Loader/Loader'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import highchartsMap from "highcharts/modules/map"
import mapData from "@highcharts/map-collection/custom/world.geo.json";
highchartsMap(Highcharts);

const ConsumptionMap = ({ map, loading }) => {

	let options = {
		chart: {
			map: 'custom/world',
			plotBorderWidth: 0
		},
		title: {
			text: ''
		},
		credits: {
			enabled: false
		},
		mapNavigation: {
			enabled: true,
			enableMouseWheelZoom: false,
			buttonOptions: {
				 verticalAlign: 'bottom'
			}
	  },
	  legend: {
		enabled: false
	  },
		colorAxis: {
			min: 0,
			max: 100,
			stops: [
				[0, '#F3372A'],
				[0.7, '#D9873C'],
				[1, '#00BA6C']
			]
		},
		series: [{
			name: 'Renewable Energy',
			mapData: mapData,
			borderWidth: 0,
			nullColor: '#E6E6EC',
			data: map,
			tooltip: {
				valueSuffix: ' %'
			},
			joinBy: ['iso-a2', 'code']
		}]
	}

	return (
		<div className="ConsumptionMap">
			{
				loading
				? <Loader />
				: map.length > 0
					?  <div className="ConsumptionMap-map">
							<HighchartsReact
								className="map"
								highcharts={Highcharts}
								constructorType={'mapChart'}
								options={options}
							/>
						</div>
					: <p>No map data</p>
			}
		</div>
	)
}

const mapStateToProps = state => ({
	map: state.user.map,
	loading: state.user.loading
})

export default connect(mapStateToProps, null)(ConsumptionMap)