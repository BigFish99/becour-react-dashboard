import React from 'react'
import './ConsumptionOverview.css'
import CountUp from 'react-countup'
import {connect} from 'react-redux'

const ConsumptionOverview = ({overview}) => {
	if(!overview) {
		return(
			<p>No data</p>
		)
	}
	return(
		<div className="ConsumptionOverview content-box">
			<div className="sections">
				<div className="part">
					<h3>Total energy consumption</h3>
					<p className="counter text-blue"><CountUp decimals={overview.totalConsumption.value % 1 !== 0 ? 2 : 0} separator=" " end={overview.totalConsumption.value} duration={1} redraw={false} preserveValue={true} /></p>
					<p className="suffix text-blue">{overview.totalConsumption.unit}</p>
				</div>
				<div className="part">
					<h3>Total renewable energy</h3>
					<p className="counter text-green"><CountUp decimals={overview.totalRenewable.value % 1 !== 0 ? 2 : 0} separator=" " end={overview.totalRenewable.value} duration={1} redraw={false} preserveValue={true} /></p>
					<p className="suffix text-green">{overview.totalRenewable.unit}</p>
				</div>
				<div className="part">
					<h3>Non-renewable energy</h3>
					<p className="counter text-red"><CountUp decimals={overview.totalNonRenewable.value % 1 !== 0 ? 2 : 0} separator=" " end={overview.totalNonRenewable.value} duration={1} redraw={false} preserveValue={true} /></p>
					<p className="suffix text-red">{overview.totalNonRenewable.unit}</p>
				</div>
				<div className="part">
					<h3>Total avoided emissions</h3>
					{
						typeof overview.totalAvoidedEmissions.value !== 'number'
						? <p className="counter">{overview.totalAvoidedEmissions.value}</p>
						: 	<>
								<p className="counter"><CountUp decimals={overview.totalAvoidedEmissions.value % 1 !== 0 ? 2 : 0} separator=" " end={overview.totalAvoidedEmissions.value} duration={1} redraw={false} preserveValue={true} /></p>
								<p className="suffix">{overview.totalAvoidedEmissions.unit}</p>
							</>
					}
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	overview: state.consumption.overview
})

export default connect(mapStateToProps, null)(ConsumptionOverview	)