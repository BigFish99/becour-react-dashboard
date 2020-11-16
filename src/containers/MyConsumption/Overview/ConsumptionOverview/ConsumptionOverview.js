import React from 'react'
import Loader from '../../../../components/Loader/Loader'
import './ConsumptionOverview.css'
import CountUp from 'react-countup'
import {connect} from 'react-redux'

const ConsumptionOverview = ({loading, overview, currentRegion}) => {
	return(
		<div className="ConsumptionOverview">
			<h1>
				{currentRegion.id === 'all' ? 'Company overview' : currentRegion.name}
				{loading && <Loader />}
			</h1>
			<div className="sections">
				<div className="part">
					<h3>Total energy consumption</h3>
					<p className="counter text-blue-dark"><CountUp end={overview.totalConsumption} duration={1} seperator="&nbsp;" redraw={false} preserveValue={true} /></p>
					<p className="suffix text-blue-dark">GWh</p>
				</div>
				<div className="part">
					<h3>Total renewable energy</h3>
					<p className="counter text-green"><CountUp end={overview.totalRenewable} duration={1} seperator="&nbsp;" redraw={false} preserveValue={true} /></p>
					<p className="suffix text-green">GWh</p>
				</div>
				<div className="part">
					<h3>Non-renewable energy</h3>
					<p className="counter text-red"><CountUp end={overview.totalNonRenewable} duration={1} seperator="&nbsp;" redraw={false} preserveValue={true} /></p>
					<p className="suffix text-red">GWh</p>
				</div>
				<div className="part">
					<h3>Total avoided emissions</h3>
					<p className="counter"><CountUp end={overview.totalAvoidedEmissions} duration={1} seperator="&nbsp;" redraw={false} preserveValue={true} /></p>
					<p className="suffix">tonnes CO<sub>2</sub></p>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	loading: state.consumption.loading,
	overview: state.consumption.overview,
	currentRegion: state.user.regions.current
})

export default connect(mapStateToProps, null)(ConsumptionOverview	)