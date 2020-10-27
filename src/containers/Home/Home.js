import React from 'react'
import {connect} from 'react-redux'
import StatusSummary from '../../components/StatusSummary/StatusSummary'

// Components
import Welcome from '../../components/Welcome/Welcome'

const Home = () => {
	return (
		<main className="Home">
			<Welcome />
			<StatusSummary />
		</main>
	)
}

const mapStateToProps = state => ({
	map: state.frontpage.map,
	powerplants: state.frontpage.powerplants,
	tiles: state.frontpage.tiles
})

export default connect(mapStateToProps, null)(Home)