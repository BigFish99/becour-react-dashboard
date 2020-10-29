import React from 'react'
import PageNavigation from '../../components/PageNavigation/PageNavigation'
import {Route} from 'react-router-dom'
import SideBarTree from '../../components/SideBarTree/SideBarTree'
import TradeConfirmations from '../../components/TradeConfirmations/TradeConfirmations'

const MyDocuments = () => {

	return (
		<main className="MyDocuments container-sidebar">
			<SideBarTree />
			<PageNavigation
				title="My documents"
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

export default MyDocuments