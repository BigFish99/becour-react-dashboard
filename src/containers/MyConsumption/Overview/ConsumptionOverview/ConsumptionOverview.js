import React from 'react'
import './ConsumptionOverview.css'
import CountUp from 'react-countup'
import {connect} from 'react-redux'

const ConsumptionOverview = ({overview}) => {
	return(
		<div className="ConsumptionOverview content-box">
			<div className="sections">
				<div className="part">
					<h3>Total energy consumption</h3>
					<p className="counter text-blue-dark"><CountUp end={overview.totalConsumption.value} duration={1} seperator="&nbsp;" redraw={false} preserveValue={true} /></p>
					<p className="suffix text-blue-dark">{overview.totalConsumption.unit}</p>
				</div>
				<div className="part">
					<h3>Total renewable energy</h3>
					<p className="counter text-green"><CountUp end={overview.totalRenewable.value} duration={1} seperator="&nbsp;" redraw={false} preserveValue={true} /></p>
					<p className="suffix text-green">{overview.totalRenewable.unit}</p>
				</div>
				<div className="part">
					<h3>Non-renewable energy</h3>
					<p className="counter text-red"><CountUp end={overview.totalNonRenewable.value} duration={1} seperator="&nbsp;" redraw={false} preserveValue={true} /></p>
					<p className="suffix text-red">{overview.totalNonRenewable.unit}</p>
				</div>
				<div className="part">
					<h3>Total avoided emissions</h3>
					<p className="counter"><CountUp end={overview.totalAvoidedEmissions.value} duration={1} seperator="&nbsp;" redraw={false} preserveValue={true} /></p>
					<p className="suffix">{overview.totalAvoidedEmissions.unit}</p>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	overview: state.consumption.overview
})

export default connect(mapStateToProps, null)(ConsumptionOverview	)