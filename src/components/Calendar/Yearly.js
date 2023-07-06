import React from 'react'
import PieChart from '../../components/PieChart/PieChart'


export default function Yearly({data}) {
  return (
	 <div className="CalendarYearly">
		<div className="body">
			{
				data.map((d, i) =>
					<button onClick={() => console.log(d.charts)} className="month" key={i}>
						<div className="CalendarYearly__month__header">{d.name}</div>
						<PieChart charts={d.charts} />
					</button>
				)
			}
		</div>
	 </div>
  )
}
