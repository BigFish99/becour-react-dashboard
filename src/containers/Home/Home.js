import React from 'react'
import {connect} from 'react-redux'

// Components
import Welcome from '../../components/Welcome/Welcome'
import StatusSummary from '../../components/StatusSummary/StatusSummary'
import HomePowerplants from '../../components/HomePowerplants/HomePowerplants'

const Home = () => {
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

export default connect(mapStateToProps, null)(Home)