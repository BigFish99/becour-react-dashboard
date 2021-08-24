import React from 'react'
import {connect} from 'react-redux'
import Loader from '../../../components/Loader/Loader'
import './Matching.css'
import StockChart from './StockChart'
import BarChart from './BarChart'

const Matching = ({loading, consumptionPoint, consumptionMatching}) => {

	if(!consumptionMatching) {
		return <p>No data.</p>
	}

	return (
		<div className="Consumption-Matching content-box">
			<div className={loading ? 'chart loading' : 'chart'}>
				{
					loading
						? <Loader />
						:
							consumptionPoint !== null && typeof consumptionPoint.value === 'number'
							? <StockChart consumptionMatching={consumptionMatching} />
							: <BarChart consumptionMatching={consumptionMatching} />
				}
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	consumptionMatching: state.consumption.consumptionMatching,
	consumptionPoint: state.user.regions.point,
	loading: state.consumption.loading
})

export default connect(mapStateToProps, null)(Matching)