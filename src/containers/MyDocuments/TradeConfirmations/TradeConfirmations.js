import React from 'react'
import {connect} from 'react-redux'
import apiGet from '../../../functions/apiGet'
import createCSV from '../../../functions/createCSV'
import Table from '../../../components/Table/Table'
import NoDocuments from '../NoDocuments/NoDocuments'

const TradeConfirmations = ({tradeConfirmations, currentYear, currentRegion}) => {

	let table = {
		headers: ['Tradedate', 'Trade', 'Power plant', 'Delivery profile', 'Volume (MWh)', 'Price per MWh', 'PDF'],
		rows: []
	}

	if(tradeConfirmations.length > 0) {
		tradeConfirmations.forEach(({tradeDate, trade, powerplant, deliveryProfile, volume, price, pdf}) => {
			table.rows.push([tradeDate, trade, powerplant, deliveryProfile, volume, price, pdf])
		})
	}

	const downloadCSV = () => {
		apiGet('getTradeInformationCsv', {
			year: currentYear,
			region: currentRegion.id
		})
			.then(response => {
				createCSV(`becour-trade-confirmations-${new Date().getTime()}.csv`, response.data)
			})
	}

	return(
		<div className="TradeConfirmations content-box">
			<button onClick={downloadCSV} className="button green">Export CSV</button>
			{
				currentRegion.id.length <= 2
				? 	tradeConfirmations.length > 0
						? <Table {...table} select={true} />
						: <NoDocuments type="empty" />
				: <NoDocuments type="region" />
			}
		</div>
	)
}

const mapStateToProps = state => ({
	tradeConfirmations: state.documents.tradeConfirmations,
	currentYear: state.user.years.current,
	currentRegion: state.user.regions.current
})

export default connect(mapStateToProps, null)(TradeConfirmations)