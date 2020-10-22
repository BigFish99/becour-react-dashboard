import React from 'react'
import {Route} from 'react-router-dom'
import SideBarTree from '../../components/SideBarTree/SideBarTree'
import Documents from '../../components/Documents/Documents'

export default () => {
	return (
		<main className="MyDocuments container-sidebar">
			<SideBarTree />
			<Route path="/my-documents/:id" component={Documents} />
		</main>
	)
}