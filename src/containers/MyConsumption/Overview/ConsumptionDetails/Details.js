import React from 'react'
import CountUp from 'react-countup'

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
						<td><CountUp end={renewable.value} duration={1} seperator="&nbsp;" redraw={false} preserveValue={true} suffix={` ${renewable.unit}`} /></td>
					</tr>
					<tr className="seperator"></tr>
					<tr>
						<td>Total purchased</td>
						<td><CountUp end={totalPurchased.value} duration={1} seperator="&nbsp;" redraw={false} preserveValue={true} suffix={` ${totalPurchased.unit}`} /></td>
					</tr>
					<tr className="seperator"></tr>
					<tr>
						<td>Total inderect emissions</td>
						<td>
							{
								typeof totalInderectEmissions.value === 'number'
								? <CountUp end={totalInderectEmissions.value} duration={1} seperator="&nbsp;" redraw={false} suffix={` ${totalInderectEmissions.unit}`} preserveValue={true} />
								: <>{totalInderectEmissions.value}</>
							}
						</td>
					</tr>
					<tr>
						<td>Reference mix emissions</td>
						<td>
							{
								typeof referenceMixEmissions.value === 'number'
								? <CountUp end={referenceMixEmissions.value} duration={1} seperator="&nbsp;" redraw={false} suffix={` ${referenceMixEmissions.unit}`} preserveValue={true} />
								: <>{referenceMixEmissions.value}</>
							}
						</td>
					</tr>
					<tr className="seperator"></tr>
					<tr>
						<th>Total savings inderect emissions</th>
						<th>
							{
								typeof totalSavings.value === 'number'
								? <CountUp end={totalSavings.value} duration={1} seperator="&nbsp;" redraw={false} suffix={` ${totalSavings.unit}`} preserveValue={true} />
								: <>{totalSavings.value}</>
							}
						</th>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Details