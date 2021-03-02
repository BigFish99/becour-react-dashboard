import React from 'react'
import './StatusSummary.css'
import ConsumptionMap from './ConsumptionMap/ConsumptionMap'
import ConsumptionChart from './ConsumptionChart/ConsumptionChart'

const StatusSummary = () => {
	return(
		<div className="StatusSummary">
			<div className="inner">
				<div className="header">
					<h1>Status summary {new Date().getFullYear()}</h1>
					<p>Your corporate summary based on data from current year Becour has access to.</p>
				</div>
				<div className="content">
					<div className="box map">
						<ConsumptionMap />
					</div>
					<div className="">

					</div>
					<div className="">
						<ConsumptionChart />
					</div>
				</div>
			</div>
		</div>
	)
}

export default StatusSummary