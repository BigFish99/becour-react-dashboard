import React from 'react'
import {connect} from 'react-redux'
import Table from '../../../components/Table/Table'
import NoDocuments from '../NoDocuments/NoDocuments'

const ProofOfPurchases = ({proofOfPurchases, currentRegion}) => {

	let table = {
		headers: ['Name', 'Type', 'PDF'],
		rows: []
	}

	if(proofOfPurchases.length > 0) {
		proofOfPurchases.forEach(({name, type, pdf}) => {
			table.rows.push([name, type, pdf])
		})
	}

	return(
		<div className="ProofOfPurchases content-box">
			{
				currentRegion.id.length <= 2
				? 	proofOfPurchases.length > 0
						? <Table {...table} select={true} />
						: <NoDocuments type="empty" />
				: <NoDocuments type="region" />
			}
		</div>
	)
}

const mapStateToProps = state => ({
	currentRegion: state.user.regions.current,
	proofOfPurchases: state.documents.proofOfPurchases
})

export default connect(mapStateToProps, null)(ProofOfPurchases)