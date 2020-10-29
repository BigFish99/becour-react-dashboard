import React from 'react'
import PageNavigation from '../../components/PageNavigation/PageNavigation'
import SideBarTree from '../../components/SideBarTree/SideBarTree'

const MyPowerplants = () => {

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
		</main>
	)
}

export default MyPowerplants