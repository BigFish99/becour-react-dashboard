import React from 'react'
import PieChart from '../../components/PieChart/PieChart'
import {activateModal} from '../../store/modal/actions'
import {connect} from 'react-redux'
import MatchingSummary from '../../components/MatchingSummary/MatchingSummary'

function Yearly({data, activateModal}) {

	const showYear = (summary) => {
		activateModal(
			<div>
				<h1>{summary.name}</h1>
				<MatchingSummary summary={summary} />
			</div>
		);
	}

	return (
		<div className="CalendarYearly">
			<h1>Monthly summary</h1>
			<div className="body">
				{
					data.map((d, i) =>
						<button onClick={() => showYear({name: d.name, description: '', charts: d.charts})} className="month" key={i}>
							<div className="CalendarYearly__month__header">
								<p>{d.name}</p>
							</div>
							<PieChart charts={d.charts} />
						</button>
					)
				}
			</div>
		</div>
	)
}

export default connect(null, {activateModal})(Yearly)