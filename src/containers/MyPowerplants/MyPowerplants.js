import React, {useEffect, useRef} from 'react'
import './MyPowerplants.css'
import { useParams } from 'react-router-dom'
import {connect} from 'react-redux'
import PageNavigation from '../../components/PageNavigation/PageNavigation'
import SideBarTree from '../../components/SideBarTree/SideBarTree'
import {getConsumerPowerplants, clearPowerplantsData} from '../../store/powerplants/actions'
import PowerplantsMap from './PowerplantsMap/PowerplantsMap'
import PowerplantList from './PowerplantList/PowerplantList'

const MyPowerplants = ({loading, currentYear, currentRegion, currentPoint, getConsumerPowerplants, clearPowerplantsData}) => {

	const prevCurrentRegion = useRef();
	const prevCurrentYear = useRef();
	const prevCurrentPoint = useRef();
	const prevCurrentCategory = useRef();
	const params = useParams()

	useEffect(() => {
		let category = params.id ? params.id : 'all';
		if(prevCurrentPoint.current !== currentPoint || prevCurrentYear.current !== currentYear || prevCurrentRegion.current !== currentRegion || prevCurrentCategory.current !== params.id) {
			getConsumerPowerplants(category, currentYear, currentRegion.id, currentPoint ? currentPoint.value : null)
			prevCurrentPoint.current = currentPoint;
			prevCurrentYear.current = currentYear;
			prevCurrentRegion.current = currentRegion;
			prevCurrentCategory.current = params.id;
		}

		return () => { clearPowerplantsData() }
	}, [currentRegion, currentPoint, currentYear, params, clearPowerplantsData, getConsumerPowerplants])

	return(
		<main className="MyPowerplants container-sidebar">
			<SideBarTree />
			<div className="mainContent">
				<PageNavigation
					loading={loading}
					points={currentRegion.points ? currentRegion.points : false}
					navigation={[
						{
							path: `/my-powerplants`,
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
			</div>
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