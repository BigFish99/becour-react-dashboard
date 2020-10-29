import React, {useEffect} from 'react'
import {getTradeConfirmations} from '../../store/documents/actions'
import {connect} from 'react-redux'
import Table from '../Table/Table'

const TradeConfirmations = ({tradeConfirmations, year, getTradeConfirmations, currentRegion}) => {

	let table = {
		headers: ['Tradedate', 'Trade', 'Power plant', 'Delivery profile', 'Volume (MWh)', 'Price per MWh', 'PDF'],
		rows: []
	}

	tradeConfirmations.forEach(({tradeDate, trade, powerplant, deliveryProfile, volume, price, pdf}) => {
		table.rows.push([tradeDate, trade, powerplant, deliveryProfile, volume, price, pdf])
	})

	useEffect(() => {
		getTradeConfirmations(year, currentRegion)
	}, [year, getTradeConfirmations, currentRegion])

	return(
		<div className="TradeConfirmations">
			<Table {...table} />
		</div>
	)
}

const mapStateToProps = state => ({
	year: state.user.years.current,
	currentRegion: state.user.regions.current,
	tradeConfirmations: state.documents.tradeConfirmations
})

export default connect(mapStateToProps, {getTradeConfirmations})(TradeConfirmations)