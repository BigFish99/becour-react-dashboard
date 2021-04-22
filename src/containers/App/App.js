import React, {useEffect} from 'react';
import './fonts.css'
import './App.css'
import {
	HashRouter as Router,
	Route,
	Switch
} from 'react-router-dom'

import {getConsumerData, clearCurrentConsumptionPoint} from '../../store/user/actions'
// Containers
import Header from '../../components/Header/Header'
import Home from '../Home/Home'
import MyDocuments from '../MyDocuments/MyDocuments'
import MyConsumption from '../MyConsumption/MyConsumption'
import MyPowerplants from '../MyPowerplants/MyPowerplants'
import Contact from '../Contact/Contact'
import {connect} from 'react-redux'

function App({getConsumerData, currentRegion, clearCurrentConsumptionPoint}) {

	useEffect(() => {
		getConsumerData()
	}, [getConsumerData])

	useEffect(() => {
		clearCurrentConsumptionPoint()
	}, [currentRegion, clearCurrentConsumptionPoint])

	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/my-documents" component={MyDocuments} />
					<Route path="/my-consumption" component={MyConsumption} />
					<Route path="/my-powerplants" exact component={MyPowerplants} />
					<Route path="/my-powerplants/:id" component={MyPowerplants} />
					<Route path="/contact" component={Contact} />
				</Switch>
			</Router>
		</div>
	);
}

const mapStateToProps = state => ({
	currentRegion: state.user.regions.current
})

export default connect(mapStateToProps, {getConsumerData,clearCurrentConsumptionPoint})(App);