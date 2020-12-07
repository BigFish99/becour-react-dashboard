import React, {useEffect} from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {getConsumptionData} from '../../store/consumption/actions'
import PageNavigation from '../../components/PageNavigation/PageNavigation'
import {clearCurrentConsumptionPoint} from '../../store/user/actions'
import SideBarTree from '../../components/SideBarTree/SideBarTree'
import Overview from './Overview/Overview'

const MyConsumption = ({loading, currentYear, currentRegion, getConsumptionData, currentPoint, clearCurrentConsumptionPoint}) => {

	useEffect(() => {
		if(currentPoint !== null) {
			getConsumptionData(currentYear, currentRegion, currentPoint.value)
		} else {
			getConsumptionData(currentYear, currentRegion, null)
		}
	}, [currentYear, currentRegion, getConsumptionData, currentPoint])

	useEffect(() => {
		return () => {
			clearCurrentConsumptionPoint()
		}
	}, [clearCurrentConsumptionPoint])

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
		</main>
	)
}

const mapStateToProps = state => ({
	loading: state.consumption.loading,
	currentYear: state.user.years.current,
	currentRegion: state.user.regions.current,
	currentPoint: state.user.regions.point
})

export default connect(mapStateToProps, {getConsumptionData, clearCurrentConsumptionPoint})(MyConsumption)