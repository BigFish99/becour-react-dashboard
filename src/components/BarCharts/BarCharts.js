import React from 'react'
import './BarCharts.css'

const buildBarChartsData = (charts) => {
	const bars = [];
	charts.forEach((chart, index) => {
		chart.series.forEach((serie, seriesIndex) => {
			bars.push({total: chart.total,...serie, backgroundColor: chart.backgroundColor, color: chart.colors[seriesIndex]});
		})
	})
	bars.forEach((bar, index) => {
		bar.percent = (bar.value / bar.total) * 100;
	})
	return bars
}

const Bar = ({name, description, value, percent, backgroundColor, color}) => {
	return(
		<div className="Bar">
			<div className="Bar__bar__wrapper">
				<div className="Bar__bar__percent">
					<span>{percent.toFixed(0)}%</span>
				</div>
				<div className="Bar__bar" style={{backgroundColor: backgroundColor}}>
					<div className="Bar__bar__value" style={{transform: `translateY(-${percent}%)`, backgroundColor: color}}></div>
				</div>
			</div>
			<div className="Bar__description">
				<p className="Bar__description__name">{name}</p>
				<p className="Bar__description__description">{description}</p>
			</div>
		</div>
	)
}

export default function BarCharts({charts}) {
	const bars = buildBarChartsData(charts)
	return (
		<div className="BarCharts">
			{
				bars && bars.map((bar, index) => <Bar key={`bar_${index}`} {...bar} />)
			}
		</div>
	)
}
