import React from 'react'
import './PowerplantsMap.css'
import {connect} from 'react-redux'
import Loader from '../../../components/Loader/Loader'
import GoogleMap from './GoogleMap'

const PowerplantsMap = ({powerplants, loading}) => {
	return(
		<div className="PowerplantsMap">
			{
				loading
				? <Loader />
				: powerplants.length > 0
					? <GoogleMap powerplants={powerplants} />
					: <p>No powerplants fetched</p>
			}
		</div>
	)
}

const mapStateToProps = state => ({
	powerplants: state.powerplants.plants,
	loading: state.powerplants.loading
})

export default connect(mapStateToProps, null)(PowerplantsMap)