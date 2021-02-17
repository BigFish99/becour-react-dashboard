import React from 'react'
import './ConsumptionDetails.css'
import {connect} from 'react-redux'
import EnergyDisclosure from './EnergyDisclosure'
import Details from './Details'


const ConsumptionDetails = ({energyDisclosure, details}) => {
	return(
		<div className="ConsumptionDetails">
			<div className="section content-box">
				{
					energyDisclosure
					? <EnergyDisclosure energyDisclosure={energyDisclosure} />
					: <p>No data.</p>
				}
			</div>
			<div className="section content-box">
				{
					details
					? <Details details={details} />
					: <p>No data.</p>
				}
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	energyDisclosure: state.consumption.energyDisclosure,
	details: state.consumption.details
})

export default connect(mapStateToProps, null)(ConsumptionDetails)