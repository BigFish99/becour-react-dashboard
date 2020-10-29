import React from 'react'
import PageNavigation from '../../components/PageNavigation/PageNavigation'
import SideBarTree from '../../components/SideBarTree/SideBarTree'

const MyConsumption = () => {

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
		</main>
	)
}

export default MyConsumption