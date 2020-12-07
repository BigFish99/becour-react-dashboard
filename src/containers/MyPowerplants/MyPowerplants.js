import React, {useEffect} from 'react'
import './MyPowerplants.css'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import PageNavigation from '../../components/PageNavigation/PageNavigation'
import SideBarTree from '../../components/SideBarTree/SideBarTree'
import {getConsumerPowerplants, clearPowerplantsData} from '../../store/powerplants/actions'
import PowerplantsMap from './PowerplantsMap/PowerplantsMap'
import PowerplantList from './PowerplantList/PowerplantList'

const MyPowerplants = ({currentRegion, currentYear, getConsumerPowerplants, clearPowerplantsData, loading, currentPoint}) => {

	const {id} = useParams()

	useEffect(() => {
		let category = id ? id : 'all'
		if(currentPoint !== null) {
			getConsumerPowerplants(category, currentYear, currentRegion, currentPoint)
		} else {
			getConsumerPowerplants(category, currentYear, currentRegion, null)
		}
	}, [id, currentYear, currentRegion, getConsumerPowerplants, currentPoint])

	useEffect(() => {
		return () => {
			clearPowerplantsData()
		}
	}, [clearPowerplantsData])

	return (
		<main className="MyPowerplants container-sidebar">
			<SideBarTree />
			<PageNavigation
				loading={loading}
				points={currentRegion.points ? currentRegion.points : false}
				navigation={[
					{
						path: `/my-powerplants/`,
						title: 'All technologies'
					},
					{
						path: `/my-powerplants/wind-power`,
						title: 'Wind power'
					},
					{
						path: `/my-powerplants/solar-power`,
						title: 'Solar power'
					},
					{
						path: `/my-powerplants/hydro-power`,
						title: 'Hydro power'
					},
				]}
			/>
			<PowerplantsMap />
			<PowerplantList />
		</main>
	)
}

const mapStateToProps = state => ({
	loading: state.powerplants.loading,
	currentYear: state.user.years.current,
	currentRegion: state.user.regions.current,
	currentPoint: state.user.regions.point
})

export default connect(mapStateToProps, {getConsumerPowerplants, clearPowerplantsData})(MyPowerplants)