import React, {useEffect} from 'react'
import PageNavigation from '../../components/PageNavigation/PageNavigation'
import {connect} from 'react-redux'
import {getConsumerDocuments} from '../../store/documents/actions'
import {Route} from 'react-router-dom'
import SideBarTree from '../../components/SideBarTree/SideBarTree'
import TradeConfirmations from './TradeConfirmations/TradeConfirmations'

const MyDocuments = ({getConsumerDocuments, currentYear, currentRegion, loading, currentPoint}) => {

	useEffect(() => {
		if(currentPoint !== null) {
			getConsumerDocuments(currentYear, currentRegion.id, currentPoint.value)
		} else {
			getConsumerDocuments(currentYear, currentRegion.id, null)
		}
	}, [currentYear, currentRegion, getConsumerDocuments, currentPoint])

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
						path: `/my-documents/contracts`,
						title: 'Contracts'
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

export default connect(mapStateToProps, {getConsumerDocuments})(MyDocuments)