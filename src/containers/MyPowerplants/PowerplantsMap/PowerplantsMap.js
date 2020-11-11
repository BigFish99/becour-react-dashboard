import React from 'react'
import './PowerplantsMap.css'
import {connect} from 'react-redux'
import Loader from '../../../components/Loader/Loader'
import HighChartsMap from './HighChartsMap'


const PowerplantsMap = ({powerplants, regions, loading}) => {
	return(
		<div className="PowerplantsMap">
			{
				loading
				? <Loader />
				: powerplants.length > 0
					? <HighChartsMap powerplants={powerplants} regions={regions} />
					: <p>No powerplants fetched</p>
			}
		</div>
	)
}

const mapStateToProps = state => ({
	powerplants: state.powerplants.plants,
	regions: state.powerplants.regions,
	loading: state.powerplants.loading
})

export default connect(mapStateToProps, null)(PowerplantsMap)