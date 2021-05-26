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
						<td><CountUp end={renewable.value} duration={1} redraw={false} preserveValue={true} suffix={` ${renewable.unit}`} /></td>
					</tr>
					<tr className="seperator"></tr>
					<tr>
						<td>Total purchased</td>
						<td><CountUp decimals={totalPurchased.value % 1 !== 0 ? 2 : 0} separator=" " end={totalPurchased.value} duration={1} redraw={false} preserveValue={true} suffix={` ${totalPurchased.unit}`} /></td>
					</tr>
					<tr className="seperator"></tr>
					<tr>
						<td>Total indirect emissions</td>
						<td>
							{
								typeof totalInderectEmissions.value === 'number'
								? <CountUp decimals={totalInderectEmissions.value % 1 !== 0 ? 2 : 0} separator=" " end={totalInderectEmissions.value} duration={1} redraw={false} suffix={` ${totalInderectEmissions.unit}`} preserveValue={true} />
								: <>{totalInderectEmissions.value}</>
							}
						</td>
					</tr>
					<tr>
						<td>Reference mix emissions</td>
						<td>
							{
								typeof referenceMixEmissions.value === 'number'
								? <CountUp decimals={referenceMixEmissions.value % 1 !== 0 ? 2 : 0} separator=" " end={referenceMixEmissions.value} duration={1} redraw={false} suffix={` ${referenceMixEmissions.unit}`} preserveValue={true} />
								: <>{referenceMixEmissions.value}</>
							}
						</td>
					</tr>
					<tr className="seperator"></tr>
					<tr>
						<th>Total savings indirect emissions</th>
						<th>
							{
								typeof totalSavings.value === 'number'
								? <CountUp decimals={totalSavings.value % 1 !== 0 ? 2 : 0} separator=" " end={totalSavings.value} duration={1} redraw={false} suffix={` ${totalSavings.unit}`} preserveValue={true} />
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