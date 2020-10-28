import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import SideBarTree from '../../components/SideBarTree/SideBarTree'
import Documents from '../../components/Documents/Documents'

const MyDocuments = ({regions}) => {
	return (
		<main className="MyDocuments container-sidebar">
			<SideBarTree regions={regions} />
			<Route path="/my-documents/:id" component={Documents} />
		</main>
	)
}

const mapStateToProps = state => ({
	regions: state.documents.regions
})

export default connect(mapStateToProps, null)(MyDocuments)