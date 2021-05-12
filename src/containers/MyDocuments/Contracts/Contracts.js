import React from 'react'
import {connect} from 'react-redux'
import apiGet from '../../../functions/apiGet'
import createCSV from '../../../functions/createCSV'
import Table from '../../../components/Table/Table'
import NoDocuments from '../NoDocuments/NoDocuments'

const Contracts = ({contracts, currentYear, currentRegion}) => {

	let table = {
		headers: ['Tradedate', 'Trade', 'Delivery profile', 'Volume (MWh)', 'Contract period', 'PDF'],
		rows: []
	}

	if(contracts.length > 0) {
		contracts.forEach(({tradeDate, trade, deliveryProfile, volume, contractPeriod, pdf}) => {
			table.rows.push([tradeDate, trade, deliveryProfile, volume, contractPeriod, pdf])
		})
	}

	const downloadCSV = () => {
		apiGet('getContractInformationCsv', {
			year: currentYear,
			region: currentRegion.id
		})
			.then(response => {
				createCSV(`becour-contracts-${new Date().getTime()}.csv`, response.data)
			})
	}

	return(
		<div className="Contracts content-box">
			<button onClick={downloadCSV} className="button green">Export CSV</button>
			{
				currentRegion.id.length <= 2
				? 	contracts.length > 0
						? <Table {...table} select={true} />
						: <NoDocuments type="empty" />
				: <NoDocuments type="region" />
			}
		</div>
	)
}

const mapStateToProps = state => ({
	contracts: state.documents.contracts,
	currentYear: state.user.years.current,
	currentRegion: state.user.regions.current
})

export default connect(mapStateToProps, null)(Contracts)