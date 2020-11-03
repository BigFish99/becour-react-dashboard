import React from 'react'
import './ConsumptionDetails.css'
import {connect} from 'react-redux'
import Loader from '../../../../components/Loader/Loader'
import EnergyDisclosure from './EnergyDisclosure'
import Details from './Details'


const ConsumptionDetails = ({energyDisclosure, details, loading}) => {
	return(
		<div className="ConsumptionDetails">
			<div className="section">
				{
					loading
					? <Loader />
					: <EnergyDisclosure energyDisclosure={energyDisclosure} />
				}
			</div>
			<div className="section">
				{
					loading
					? <Loader />
					: <Details details={details} />
				}
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	loading: state.consumption.loading,
	energyDisclosure: state.consumption.energyDisclosure,
	details: state.consumption.details
})

export default connect(mapStateToProps, null)(ConsumptionDetails)