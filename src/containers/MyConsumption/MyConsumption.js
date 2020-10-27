import React from 'react'
import {Route} from 'react-router-dom'
import Consumption from '../../components/Consumption/Consumption'
import SideBarTree from '../../components/SideBarTree/SideBarTree'

export default () => {
	return (
		<main className="container-sidebar">
			<SideBarTree />
			<Route path="/my-consumption/:id" component={Consumption} />
		</main>
	)
}