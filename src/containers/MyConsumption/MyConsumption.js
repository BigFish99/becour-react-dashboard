import React, {useEffect} from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {getConsumptionData} from '../../store/consumption/actions'
import PageNavigation from '../../components/PageNavigation/PageNavigation'
import SideBarTree from '../../components/SideBarTree/SideBarTree'
import Overview from './Overview/Overview'

const MyConsumption = ({currentYear, currentRegion, getConsumptionData}) => {

	useEffect(() => {
		getConsumptionData(currentYear, currentRegion)
	}, [currentYear, currentRegion, getConsumptionData])

	return (
		<main className="MyConsumption container-sidebar">
			<SideBarTree />
			<PageNavigation
				title="My consumption"
				navigation={[
					{
						path: `/my-consumption/`,
						title: 'Consumption overview'
					},
					{
						path: `/my-consumption/consumption-matching`,
						title: 'Consumption matching'
					}
				]}
			/>
			<Route path="/my-consumption/" exact component={Overview} />
		</main>
	)
}

const mapStateToProps = state => ({
	currentYear: state.user.years.current,
	currentRegion: state.user.regions.current
})

export default connect(mapStateToProps, {getConsumptionData})(MyConsumption)