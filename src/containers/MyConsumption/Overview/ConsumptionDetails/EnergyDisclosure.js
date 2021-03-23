import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import CountUp from 'react-countup'

const EnergyDisclosure = ({energyDisclosure}) => {

	const {
		documented: {
			total,
			wind,
			solar,
			hydro
		},
		undocumented
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
			enabled: true,
			headerFormat: '<strong>{point.key}</strong><br/>',
			pointFormat: '<br>{point.y}%</br>',
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
			borderWidth: 0,
			data: [
				{
					name: 'Wind',
					color: '#00BA6C',
					y: wind
				},
				{
					name: 'Hydro',
					color: '#0AC5D1',
					y: hydro
				},
				{
					name: 'Solar',
					color: '#F0C659',
					y: solar
				},
				{
					name: 'Undocumented',
					color: '#96051C',
					y: undocumented
				}
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
						<th>Documented consumption</th>
						<th><CountUp end={total} duration={1} seperator="&nbsp;" redraw={false} preserveValue={true} />%</th>
					</tr>
					<tr>
						<td>Wind</td>
						<td><CountUp end={wind} duration={1} seperator="&nbsp;" redraw={false} preserveValue={true} />%</td>
					</tr>
					<tr>
						<td>Solar</td>
						<td><CountUp end={solar} duration={1} seperator="&nbsp;" redraw={false} preserveValue={true} />%</td>
					</tr>
					<tr>
						<td>Hydro</td>
						<td><CountUp end={hydro} duration={1} seperator="&nbsp;" redraw={false} preserveValue={true} />%</td>
					</tr>
					<tr className="seperator"></tr>
					<tr>
						<th>Undocumented</th>
						<td><CountUp end={undocumented} duration={1} seperator="&nbsp;" redraw={false} preserveValue={true} />%</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default EnergyDisclosure