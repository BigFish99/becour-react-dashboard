import React from 'react'

const Details = ({details}) => {
	const {
		renewable,
		totalPurchased,
		totalInderectEmissions,
		referenceMixEmissions,
		totalSavings
	} = details
	return(
		<div className="ConsumptionDetails-Details">
			<h3>Total saved emissions</h3>
			<table className="details">
				<tbody>
					<tr>
						<td>Renewable</td>
						<td>{renewable}%</td>
					</tr>
					<tr className="seperator"></tr>
					<tr>
						<td>Total purchased</td>
						<td>{totalPurchased} GWh</td>
					</tr>
					<tr className="seperator"></tr>
					<tr>
						<td>Total inderect emissions</td>
						<td>{totalInderectEmissions}kg CO<sub>2</sub></td>
					</tr>
					<tr>
						<td>Reference mix emissions</td>
						<td>{referenceMixEmissions}kg CO<sub>2</sub></td>
					</tr>
					<tr className="seperator"></tr>
					<tr>
						<th>Total savings inderect emissions</th>
						<th>{totalSavings}kg CO<sub>2</sub></th>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Details