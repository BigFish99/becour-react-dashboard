import React from 'react'
import Yearly from './Yearly';
import './Calendar.css'

export default function Calendar({data}) {
	return (
		<div className="Calendar">
			<div className="calendar-body">
				<Yearly data={data} />
			</div>
		</div>
	)
}
