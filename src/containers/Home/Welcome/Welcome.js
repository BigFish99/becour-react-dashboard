import React from 'react'
import {removeLoader} from '../../../store/frontpage/actions'
import {connect} from 'react-redux'
import Loader from '../../../components/Loader/Loader'
import CountUp from 'react-countup'
import './Welcome.css'

const Welcome = ({ company, renewable, nonRenewable, avoidedEmissions, loading }) => {

	return (
		<section className="Welcome">
			<div className="wrapper content-box">
				<div className="logo">
					<div className="inner">

					</div>
				</div>
				<div className="content">
					{
						loading
						? <Loader />
						: <p className="company-title">Welcome {company}</p>
					}
					<p>Here you will find your corporate renewable energy overview</p>
				</div>
				<div className="stat">
					<p className="title">Renewable energy</p>
					{
						loading
						? <Loader />
						: <p className="value green">
								<CountUp end={renewable.value} duration={1} seperator="&nbsp;" suffix={` ${renewable.unit}`} redraw={false} preserveValue={true} />
							</p>
					}
				</div>
				<div className="stat">
					<p className="title">Non-renewable energy</p>
					{
						loading
						? <Loader />
						: <p className="value red">
								<CountUp end={nonRenewable.value} duration={1} seperator="&nbsp;" suffix={` ${nonRenewable.unit}`} redraw={false} preserveValue={true} />
							</p>
					}
				</div>
				<div className="stat">
					<p className="title">Avoided emissions</p>
					{
						loading
						? <Loader />
						: <p className="value">
								<CountUp end={avoidedEmissions.value} duration={1} seperator="&nbsp;" suffix={` ${avoidedEmissions.unit}`} redraw={false} preserveValue={true} />
							</p>
					}
				</div>
			</div>
		</section>
	)
}

const mapStateToProps = state => ({
	loading: state.user.loading,
	company: state.user.customer,
	renewable: state.user.tiles.renewable,
	nonRenewable: state.user.tiles.nonRenewable,
	avoidedEmissions: state.user.tiles.avoidedEmissions

})

export default connect(mapStateToProps, {removeLoader})(Welcome)