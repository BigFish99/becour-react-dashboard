import React from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import {setCurrentConsumptionPoint} from '../../store/user/actions'

const PointSelect = ({points, setCurrentConsumptionPoint, currentPoint}) => {

	const selectPoint = selected => {
		setCurrentConsumptionPoint(selected)
	}

	return(
		<div className="PointSelect">
			<label htmlFor="points">Filter by consumption location</label>
			<Select
				className="basic-single"
				classNamePrefix="select"
				placeholder="Whole country"
				onChange={selectPoint}
				isClearable={true}
				isSearchable={true}
				name="points"
				options={points}
				value={currentPoint}
			/>
		</div>
	)
}

const mapStateToProps = state => ({
	currentPoint: state.user.regions.point
})

export default connect(mapStateToProps, {setCurrentConsumptionPoint})(PointSelect)