import React from 'react'
import SideBarTree from '../../components/SideBarTree/SideBarTree'
import Calendar from '../../components/Calendar/Calendar'
import PageNavigation from '../../components/PageNavigation/PageNavigation'
import MatchingSummary from '../../components/MatchingSummary/MatchingSummary'
import {getMatchingData} from '../../store/matching/actions'
import { connect } from 'react-redux'

const Matching = ({summary, months, getMatchingData, loading, currentYear, currentRegion, currentPoint}) => {

	React.useEffect(() => {
		getMatchingData()
	}, [getMatchingData, currentYear, currentRegion, currentPoint])

	return (
		<main className="MyConsumption container-sidebar">
			<SideBarTree />
			<div className="mainContent">
				<PageNavigation
					loading={loading}
					points={currentRegion.points ? currentRegion.points : false}
				/>
				<div className="content-box">
					<div style={{marginBottom: 50}}>
						{ summary.name && <h1>{summary.name}</h1> }
						{ summary.description && <p>{summary.description}</p> }
					</div>
					<MatchingSummary summary={summary} />
				</div>
				<div className="content-box" style={{marginTop: 50}}>
					<Calendar data={months} loading={loading} />
				</div>
			</div>
		</main>
	)
}

const mapStateToProps = (state) => ({
	loading: state.matching.loading,
	summary: state.matching.summary,
	months: state.matching.months,
	currentYear: state.user.years.current,
	currentRegion: state.user.regions.current,
	currentPoint: state.user.regions.point
})

export default connect(mapStateToProps, {getMatchingData})(Matching)