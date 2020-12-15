import React, {useEffect} from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {getConsumptionData} from '../../store/consumption/actions'
import PageNavigation from '../../components/PageNavigation/PageNavigation'
import SideBarTree from '../../components/SideBarTree/SideBarTree'
import Overview from './Overview/Overview'
import Matching from './Matching/Matching'

const MyConsumption = ({loading, currentYear, currentRegion, getConsumptionData, currentPoint}) => {

	useEffect(() => {
		if(currentPoint !== null) {
			getConsumptionData(currentYear, currentRegion.id, currentPoint.value)
		} else {
			getConsumptionData(currentYear, currentRegion.id, null)
		}
	}, [currentYear, currentRegion, getConsumptionData, currentPoint])

	return (
		<main className="MyConsumption container-sidebar">
			<SideBarTree />
			<PageNavigation
				loading={loading}
				points={currentRegion.points ? currentRegion.points : false}
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
			<Route path="/my-consumption/consumption-matching" exact component={Matching} />
		</main>
	)
}

const mapStateToProps = state => ({
	loading: state.consumption.loading,
	currentYear: state.user.years.current,
	currentRegion: state.user.regions.current,
	currentPoint: state.user.regions.point
})

export default connect(mapStateToProps, {getConsumptionData})(MyConsumption)