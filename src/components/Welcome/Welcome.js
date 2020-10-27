import React, {useEffect} from 'react'
import {removeLoader} from '../../store/frontpage/actions'
import {connect} from 'react-redux'
import {BeatLoader} from 'react-spinners'
import './Welcome.css'

const Welcome = ({ company, renewable, nonRenewable, avoidedEmissions, loading, removeLoader }) => {

	useEffect(() => {
		setTimeout(() => {
			removeLoader()
		}, 1000)
	}, [removeLoader])

	return (
		<section className="Welcome">
			<div className="logo">
				<div className="inner">

				</div>
			</div>
			<div className="content">
				{
					loading
					? <BeatLoader color="currentColor" size={10} />
					: <p className="company-title">Welcome {company}</p>
				}
				<p>Here you will find your corporate renewable energy overview</p>
			</div>
			<div className="stat">
				<p className="title">Renewable energy</p>
				{
					loading
					? <BeatLoader color="currentColor" size={10} />
					: <p className="value green">{renewable} GWh</p>
				}
			</div>
			<div className="stat">
				<p className="title">Non-renewable energy</p>
				{
					loading
					? <BeatLoader color="currentColor" size={10} />
					: <p className="value red">{nonRenewable} GWh</p>
				}
			</div>
			<div className="stat">
				<p className="title">Avoided emissions</p>
				{
					loading
					? <BeatLoader color="currentColor" size={10} />
					: <p className="value">{avoidedEmissions} tonnes CO2</p>
				}
			</div>
		</section>
	)
}

const mapStateToProps = state => ({
	loading: state.frontpage.loading,
	company: state.frontpage.customer,
	renewable: state.frontpage.tiles.renewable,
	nonRenewable: state.frontpage.tiles.nonRenewable,
	avoidedEmissions: state.frontpage.tiles.avoidedEmissions

})

export default connect(mapStateToProps, {removeLoader})(Welcome)