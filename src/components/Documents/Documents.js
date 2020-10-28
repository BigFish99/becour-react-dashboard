import React from 'react'
import './Documents.css'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import TradeConfirmations from '../TradeConfirmations/TradeConfirmations'
import DocumentsHeader from './DocumentsHeader'

const Documents = ({yearsAvailable, match, currentYear}) => {
	const country = match.params.id
	return(
		<div className="Documents">
			<DocumentsHeader country={country} yearsAvailable={yearsAvailable} currentYear={currentYear} />
			<Route exact path="/my-documents/:id/" component={TradeConfirmations} />
		</div>
	)
}

const mapStateToProps = state => ({
	yearsAvailable: state.documents.years.available,
	currentYear: state.documents.years.current
})

export default connect(mapStateToProps, null)(Documents)