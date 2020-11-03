import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const EnergyDisclosure = ({energyDisclosure}) => {

	const {
		renewable: {
			total,
			wind,
			solar,
			hydro
		},
		nuclear,
		fossil
	} = energyDisclosure

	let options = {
		title: {
			text: ''
		},
		credits: {
			enabled: false
		},
		chart: {
			type: 'pie'
		},
		tooltip: {
			enabled: true
	  },
		plotOptions: {
			pie: {
				 allowPointSelect: true,
				 cursor: 'pointer',
				 dataLabels: {
					 format: '{point.y}%',
					  enabled: false,
				 },
				 showInLegend: false
			}
	  },
		series: [{
			name: 'Energy Source',
			innerSize: '30%',
			data: [
				{
					name: 'Wind',
					color: '#ECBE3F',
					y: wind
				},
				{
					name: 'Hydro',
					color: '#58BEBB',
					y: hydro
				},
				{
					name: 'Solar',
					color: '#D86F23',
					y: solar
				},
				{
					name: 'Nuclear',
					color: '#F43C5B',
					y: nuclear
				},
				{
					name: 'Fossil',
					color: '#96051C',
					y: fossil
				},
			]
		}]
	}

	return(
		<div className="ConsumptionDetails-EnergyDisclosure">
			<h3>Energy disclosure</h3>
			<div className="chart">
				<HighchartsReact
					highcharts={Highcharts}
					constructorType={'chart'}
					options={options}
				/>
			</div>
			<table className="details">
				<tbody>
					<tr>
						<th>Renewable</th>
						<th>{total}%</th>
					</tr>
					<tr>
						<td>Wind</td>
						<td>{wind}%</td>
					</tr>
					<tr>
						<td>Solar</td>
						<td>{solar}%</td>
					</tr>
					<tr>
						<td>Hydro</td>
						<td>{hydro}%</td>
					</tr>
					<tr className="seperator"></tr>
					<tr>
						<th>Nuclear</th>
						<td>{nuclear}%</td>
					</tr>
					<tr>
						<th>Fossil</th>
						<td>{fossil}%</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default EnergyDisclosure