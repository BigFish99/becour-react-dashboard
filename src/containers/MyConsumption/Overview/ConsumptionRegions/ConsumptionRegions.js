import React from 'react'
import {connect} from 'react-redux'

const ConsumptionRegions = ({consumptionLocations}) => {
	return(
		<div className="ConsumptionRegions">
			{
				consumptionLocations.length > 0 && <h2>Consumption locations</h2>
			}
		</div>
	)
}

const mapStateToProps = state => ({
	consumptionLocations: state.consumption.consumptionLocations
})

export default connect(mapStateToProps, null)(ConsumptionRegions)