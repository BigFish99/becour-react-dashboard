import React, {useEffect} from 'react'
import {frontPageGetConsumerData} from '../../store/frontpage/actions'
import {connect} from 'react-redux'

// Components
import Welcome from './Welcome/Welcome'
import StatusSummary from './StatusSummary/StatusSummary'
import HomePowerplants from './HomePowerplants/HomePowerplants'

const Home = ({frontPageGetConsumerData}) => {

	useEffect(() => {
		frontPageGetConsumerData()
	}, [frontPageGetConsumerData])

	return (
		<main className="Home">
			<Welcome />
			<StatusSummary />
			<HomePowerplants />
		</main>
	)
}

const mapStateToProps = state => ({
	map: state.frontpage.map,
	powerplants: state.frontpage.powerplants,
	tiles: state.frontpage.tiles
})

export default connect(mapStateToProps, {frontPageGetConsumerData})(Home)