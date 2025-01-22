import React from 'react'
import PieChart from '../PieChart/PieChart'
import BarCharts from '../BarCharts/BarCharts'
import './MatchingSummary.css'

export default function MatchingSummary({summary}) {
	return (
		<div className="MatchingSummary">
			<div className="chart">
				{
					summary.charts &&
					<PieChart charts={summary.charts} />
				}
			</div>
			<div className="bars">
				<BarCharts charts={summary.charts} />
			</div>
		</div>
	)
}
