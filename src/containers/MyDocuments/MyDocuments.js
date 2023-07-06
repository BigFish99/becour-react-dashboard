import React from 'react'
import PageNavigation from '../../components/PageNavigation/PageNavigation'
import {connect} from 'react-redux'
import {getConsumerDocuments} from '../../store/documents/actions'
import {Routes, Route} from 'react-router-dom'
import SideBarTree from '../../components/SideBarTree/SideBarTree'
import TradeConfirmations from './TradeConfirmations/TradeConfirmations'
import Contracts from './Contracts/Contracts'
import ProofOfPurchases from './ProofOfPurchases/ProofOfPurchases'
import AuditReports from './AuditReports/AuditReports'

class MyDocuments extends React.Component {

	componentDidUpdate(prevProps) {
		if(prevProps.currentRegion !== this.props.currentRegion || prevProps.currentYear !== this.props.currentYear) {
			this.props.getConsumerDocuments(this.props.currentYear, this.props.currentRegion.id, this.props.currentPoint ? this.props.currentPoint.value : null)
		}
		if(prevProps.currentPoint !== this.props.currentPoint) {
			this.props.getConsumerDocuments(this.props.currentYear, this.props.currentRegion.id, this.props.currentPoint ? this.props.currentPoint.value : null)
		}
	}

	componentDidMount() {
		this.props.getConsumerDocuments(this.props.currentYear, this.props.currentRegion.id, this.props.currentPoint ? this.props.currentPoint.value : null)
	}

	render() {
		return(
			<main className="MyDocuments container-sidebar">
				<SideBarTree />
				<div className="mainContent">
					<PageNavigation
						loading={this.props.loading}
						points={this.props.currentRegion.points ? this.props.currentRegion.points : false}
						navigation={[
							{
								path: `/my-documents`,
								title: 'Order Confirmations'
							},
							{
								path: `/my-documents/contracts`,
								title: 'Contracts'
							},
							{
								path: `/my-documents/proof-of-purchases`,
								title: 'Proof of Purchases'
							},
							{
								path: `/my-documents/audit-reports`,
								title: 'Audit Reports'
							},
						]}
					/>
					<Routes>
						<Route path="/" element={<TradeConfirmations/>} />
						<Route path="/contracts" element={<Contracts/>} />
						<Route path="/proof-of-purchases" element={<ProofOfPurchases />} />
						<Route path="/audit-reports" element={<AuditReports />} />
					</Routes>
				</div>
			</main>
		)
	}
}

const mapStateToProps = state => ({
	currentYear: state.user.years.current,
	currentRegion: state.user.regions.current,
	loading: state.documents.loading,
	currentPoint: state.user.regions.point
})

export default connect(mapStateToProps, {getConsumerDocuments})(MyDocuments)