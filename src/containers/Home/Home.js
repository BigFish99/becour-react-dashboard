import React, {useEffect} from 'react'
import {getConsumerData} from '../../store/user/actions'
import {connect} from 'react-redux'

// Components
import Welcome from './Welcome/Welcome'
import StatusSummary from './StatusSummary/StatusSummary'
import HomePowerplants from './HomePowerplants/HomePowerplants'

const Home = ({getConsumerData}) => {

	useEffect(() => {
		getConsumerData()
	}, [getConsumerData])

	return (
		<main className="Home">
			<Welcome />
			<StatusSummary />
			<HomePowerplants />
		</main>
	)
}

export default connect(null, {getConsumerData})(Home)