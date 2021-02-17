import React from 'react'
import ConsumptionOverview from './ConsumptionOverview/ConsumptionOverview'
import ConsumptionDetails from './ConsumptionDetails/ConsumptionDetails'
import ConsumptionRegions from './ConsumptionRegions/ConsumptionRegions'

const Overview = () => {
	return(
		<>
			<ConsumptionOverview />
			<ConsumptionDetails />
			<ConsumptionRegions />
		</>
	)
}

export default Overview