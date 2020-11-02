import React from 'react'
import './ConsumptionOverview.css'
import CountUp from 'react-countup'
import {connect} from 'react-redux'

const ConsumptionOverview = ({overview, currentRegion}) => {
	return(
		<div className="ConsumptionOverview">
			<h1>{currentRegion.id === 'all' ? 'Company overview' : currentRegion.name}</h1>
			<div className="sections">
				<div className="part">
					<h3>Total energy consumption</h3>
					<p><CountUp suffix="<span class='suffix'> GWh</span>" end={overview.totalConsumption} duration={1} redraw={false} preserveValue={true} /></p>
				</div>
				<div className="part">
					<h3>Total renewable energy</h3>
					<p className="text-green"><CountUp suffix="<span class='suffix'> GWh</span>" end={overview.totalRenewable} duration={1} redraw={false} preserveValue={true} /></p>
				</div>
				<div className="part">
					<h3>Non-renewable energy</h3>
					<p className="text-red"><CountUp suffix="<span class='suffix'> GWh</span>" end={overview.totalNonRenewable} duration={1} redraw={false} preserveValue={true} /></p>
				</div>
				<div className="part">
					<h3>Total avoided emissions</h3>
					<p><CountUp suffix="<span class='suffix'> tonnes CO2</span>" end={overview.totalAvoidedEmissions} duration={1} redraw={false} preserveValue={true} /></p>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	overview: state.consumption.overview,
	currentRegion: state.user.regions.current
})

export default connect(mapStateToProps, null)(ConsumptionOverview	)