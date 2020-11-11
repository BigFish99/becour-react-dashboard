import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import PageNavigation from '../../components/PageNavigation/PageNavigation'
import SideBarTree from '../../components/SideBarTree/SideBarTree'
import PowerplantsMap from './PowerplantsMap/PowerplantsMap'
import PowerplantList from './PowerplantList/PowerplantList'

const MyPowerplants = ({region, year}) => {

	const {id} = useParams()

	useEffect(() => {
		//let category = id ? id : 'all'
		//console.table({category: category, year: year, region: region.id})
	}, [id, year, region])

	return (
		<main className="MyPowerplants container-sidebar">
			<SideBarTree />
			<PageNavigation
				title="My powerplants"
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
	year: state.user.years.current,
	region: state.user.regions.current,
})

export default connect(mapStateToProps, null)(MyPowerplants)