import React, {useEffect} from 'react'
import {getTradeConfirmations} from '../../../store/documents/actions'
import {connect} from 'react-redux'
import Loader from '../../../components/Loader/Loader'
import Table from '../../../components/Table/Table'

const TradeConfirmations = ({tradeConfirmations, year, getTradeConfirmations, currentRegion, loading}) => {

	let table = {
		headers: ['Tradedate', 'Trade', 'Power plant', 'Delivery profile', 'Volume (MWh)', 'Price per MWh', 'PDF'],
		rows: []
	}

	if(tradeConfirmations.length > 0) {
		tradeConfirmations.forEach(({tradeDate, trade, powerplant, deliveryProfile, volume, price, pdf}) => {
			table.rows.push([tradeDate, trade, powerplant, deliveryProfile, volume, price, pdf])
		})
	}

	useEffect(() => {
		getTradeConfirmations(year, currentRegion)
	}, [year, getTradeConfirmations, currentRegion])

	return(
		<div className="TradeConfirmations">
			{
				loading
				? <Loader />
				: table.rows.length > 0
					? <Table {...table} />
					: <p>No table data</p>
			}
		</div>
	)
}

const mapStateToProps = state => ({
	loading: state.documents.loading,
	year: state.user.years.current,
	currentRegion: state.user.regions.current,
	tradeConfirmations: state.documents.tradeConfirmations
})

export default connect(mapStateToProps, {getTradeConfirmations})(TradeConfirmations)