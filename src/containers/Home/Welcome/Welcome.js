import React from 'react'
import {removeLoader} from '../../../store/frontpage/actions'
import {connect} from 'react-redux'
import Loader from '../../../components/Loader/Loader'
import CountUp from 'react-countup'
import './Welcome.css'

const Welcome = ({ company, logo, renewable, nonRenewable, loading }) => {

	const renewablePercent = parseFloat((renewable.value / (renewable.value + nonRenewable.value) * 100).toFixed(0));

	return (
		<section className="Welcome">
			<div className="percentage-bar">
				<div className="percent" style={{width: `${renewablePercent}%`}}></div>
			</div>
			<div className="wrapper">
				<div className="logo">
					<div className={`inner ${!logo && 'no-logo'}`}>
						{	logo &&
							<img src={logo} alt="Company logo" />
						}
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
								<CountUp end={renewable.value} duration={1} decimals={renewable.value % 1 !== 0 ? 2 : 0} separator=" " suffix={` <span class="small">${renewable.unit}</span>`} redraw={false} preserveValue={true} />
							</p>
					}
				</div>
				<div className="stat">
					<p className="title">Undocumented energy</p>
					{
						loading
						? <Loader />
						: <p className="value red">
								<CountUp end={nonRenewable.value} duration={1} decimals={nonRenewable.value % 1 !== 0 ? 2 : 0} separator=" " suffix={` <span class="small">${nonRenewable.unit}</span>`} redraw={false} preserveValue={true} />
							</p>
					}
				</div>
				<div className="stat">
					<p className="title">Renewable energy</p>
					{
						loading
						? <Loader />
						: 	<p className="value green large">
								<CountUp end={renewablePercent} duration={1} suffix="%" redraw={false} preserveValue={true} />
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
	logo: state.user.logo,
	renewable: state.user.tiles.renewable,
	nonRenewable: state.user.tiles.nonRenewable
})

export default connect(mapStateToProps, {removeLoader})(Welcome)