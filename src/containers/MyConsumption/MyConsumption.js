import React from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {getConsumptionData} from '../../store/consumption/actions'
import PageNavigation from '../../components/PageNavigation/PageNavigation'
import SideBarTree from '../../components/SideBarTree/SideBarTree'
import Overview from './Overview/Overview'
import Matching from './Matching/Matching'

class MyConsumption extends React.Component {

	componentDidUpdate(prevProps) {
		if(prevProps.currentRegion !== this.props.currentRegion) {
			this.props.getConsumptionData(this.props.currentYear, this.props.currentRegion.id, null)
		}
		if(prevProps.currentPoint !== this.props.currentPoint) {
			this.props.getConsumptionData(this.props.currentYear, this.props.currentRegion.id, this.props.currentPoint ? this.props.currentPoint.value : null)
		}
	}

	componentDidMount() {
		this.props.getConsumptionData(this.props.currentYear, this.props.currentRegion.id, this.props.currentPoint ? this.props.currentPoint.value : null)
	}

	render() {
		return (
			<main className="MyConsumption container-sidebar">
				<SideBarTree />
				<PageNavigation
					loading={this.props.loading}
					points={this.props.currentRegion.points ? this.props.currentRegion.points : false}
					navigation={[
						{
							path: `/my-consumption/`,
							title: 'Consumption overview'
						},
						{
							path: `/my-consumption/consumption-matching`,
							title: 'Consumption matching'
						}
					]}
				/>
				<Route path="/my-consumption/" exact component={Overview} />
				<Route path="/my-consumption/consumption-matching" exact component={Matching} />
			</main>
		)
	}
}

const mapStateToProps = state => ({
	loading: state.consumption.loading,
	currentYear: state.user.years.current,
	currentRegion: state.user.regions.current,
	currentPoint: state.user.regions.point
})

export default connect(mapStateToProps, {getConsumptionData})(MyConsumption)