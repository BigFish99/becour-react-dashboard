import React, {useEffect} from 'react';
import './fonts.css'
import './App.css'
import {
	HashRouter,
	Route,
	Routes
} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import {getConsumerData, clearCurrentConsumptionPoint} from '../../store/user/actions'
// Containers
import Header from '../../components/Header/Header'
import Home from '../Home/Home'
import MyDocuments from '../MyDocuments/MyDocuments'
import MyConsumption from '../MyConsumption/MyConsumption'
import MyPowerplants from '../MyPowerplants/MyPowerplants'
import Contact from '../Contact/Contact'
import Matching from '../Matching/Matching'
import Modal from '../../components/Modal/Modal';
import {connect} from 'react-redux'

function App({getConsumerData, currentRegion, clearCurrentConsumptionPoint, modalActive}) {

	useEffect(() => {
		getConsumerData()
	}, [getConsumerData])

	useEffect(() => {
		clearCurrentConsumptionPoint()
	}, [currentRegion, clearCurrentConsumptionPoint])

	return (
		<div className="App">
			<HashRouter>
				<Header />
				<AnimatePresence>
					{
						modalActive &&
						<Modal />
					}
				</AnimatePresence>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/my-documents/*" element={<MyDocuments />} />
					<Route path="/my-consumption/*" element={<MyConsumption />} />
					<Route path="/my-powerplants" element={<MyPowerplants />} />
					<Route path="/my-powerplants/:id" element={<MyPowerplants />} />
					<Route path="/matching" element={<Matching />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</HashRouter>
		</div>
	);
}

const mapStateToProps = state => ({
	currentRegion: state.user.regions.current,
	modalActive: state.modal.active
})

export default connect(mapStateToProps, {getConsumerData,clearCurrentConsumptionPoint})(App);