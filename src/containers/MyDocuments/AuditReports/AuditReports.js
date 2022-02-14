import React from 'react'
import {connect} from 'react-redux'
import Table from '../../../components/Table/Table'
import NoDocuments from '../NoDocuments/NoDocuments'

const AuditReports = ({auditReports, currentRegion}) => {

	let table = {
		headers: ['Name', 'Type', 'PDF'],
		rows: []
	}

	if(auditReports.length > 0) {
		auditReports.forEach(({name, type, pdf}) => {
			table.rows.push([name, type, pdf])
		})
	}

	return(
		<div className="AuditReports content-box">
			{
				currentRegion.id.length <= 2
				? 	auditReports.length > 0
						? <Table {...table} select={true} />
						: <NoDocuments type="empty" />
				: <NoDocuments type="region" />
			}
		</div>
	)
}

const mapStateToProps = state => ({
	currentRegion: state.user.regions.current,
	auditReports: state.documents.auditReports
})

export default connect(mapStateToProps, null)(AuditReports)