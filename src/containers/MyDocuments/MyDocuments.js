import React, {useEffect} from 'react'
import PageNavigation from '../../components/PageNavigation/PageNavigation'
import {connect} from 'react-redux'
import {getConsumerDocuments} from '../../store/documents/actions'
import {clearCurrentConsumptionPoint} from '../../store/user/actions'
import {Route} from 'react-router-dom'
import SideBarTree from '../../components/SideBarTree/SideBarTree'
import TradeConfirmations from './TradeConfirmations/TradeConfirmations'

const MyDocuments = ({getConsumerDocuments, currentYear, currentRegion, loading, currentPoint, clearCurrentConsumptionPoint}) => {

	useEffect(() => {
		if(currentPoint !== null) {
			getConsumerDocuments(currentYear, currentRegion, currentPoint.value)
		} else {
			getConsumerDocuments(currentYear, currentRegion, null)
		}
	}, [currentYear, currentRegion, getConsumerDocuments, currentPoint])

	useEffect(() => {
		return () => {
			clearCurrentConsumptionPoint()
		}
	}, [clearCurrentConsumptionPoint])

	return (
		<main className="MyDocuments container-sidebar">
			<SideBarTree />
			<PageNavigation
				loading={loading}
				points={currentRegion.points ? currentRegion.points : false}
				navigation={[
					{
						path: `/my-documents/`,
						title: 'Trade Confirmations'
					},
					{
						path: `/my-documents/billing-history`,
						title: 'Billing history'
					},
					{
						path: `/my-documents/contracts`,
						title: 'Contracts'
					},
					{
						path: `/my-documents/reporting-data`,
						title: 'Reporting'
					},
				]}
			/>
			<Route path="/my-documents/" exact component={TradeConfirmations} />
		</main>
	)
}

const mapStateToProps = state => ({
	currentYear: state.user.years.current,
	currentRegion: state.user.regions.current,
	loading: state.documents.loading,
	currentPoint: state.user.regions.point
})

export default connect(mapStateToProps, {getConsumerDocuments, clearCurrentConsumptionPoint})(MyDocuments)