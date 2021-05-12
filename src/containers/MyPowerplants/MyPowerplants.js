import React from 'react'
import './MyPowerplants.css'
import {connect} from 'react-redux'
import PageNavigation from '../../components/PageNavigation/PageNavigation'
import SideBarTree from '../../components/SideBarTree/SideBarTree'
import {getConsumerPowerplants, clearPowerplantsData} from '../../store/powerplants/actions'
import PowerplantsMap from './PowerplantsMap/PowerplantsMap'
import PowerplantList from './PowerplantList/PowerplantList'


class MyPowerplants extends React.Component {

	componentDidUpdate(prevProps) {
		let category = this.props.match.params.id ? this.props.match.params.id : 'all'
		if(prevProps.currentRegion !== this.props.currentRegion || prevProps.currentYear !== this.props.currentYear || prevProps.match.params !== this.props.match.params) {
			this.props.getConsumerPowerplants(category, this.props.currentYear, this.props.currentRegion.id, null)
		}
		if(prevProps.currentPoint !== this.props.currentPoint) {
			this.props.getConsumerPowerplants(category, this.props.currentYear, this.props.currentRegion.id, this.props.currentPoint ? this.props.currentPoint.value : null)
		}
	}

	componentDidMount() {
		let category = this.props.match.params.id ? this.props.match.params.id : 'all'
		this.props.getConsumerPowerplants(category, this.props.currentYear, this.props.currentRegion.id, this.props.currentPoint ? this.props.currentPoint.value : null)
	}

	componentWillUnmount() {
		this.props.clearPowerplantsData()
	}

	render() {
		return (
			<main className="MyPowerplants container-sidebar">
				<SideBarTree />
				<div className="mainContent">
					<PageNavigation
						loading={this.props.loading}
						points={this.props.currentRegion.points ? this.props.currentRegion.points : false}
						navigation={[
							{
								path: `/my-powerplants/`,
								title: 'All technologies'
							},
							{
								path: `/my-powerplants/wind-power`,
								title: 'Wind power'
							},
							{
								path: `/my-powerplants/solar-power`,
								title: 'Solar power'
							},
							{
								path: `/my-powerplants/hydro-power`,
								title: 'Hydro power'
							},
						]}
					/>
					<PowerplantsMap />
					<PowerplantList />
				</div>
			</main>
		)
	}
}

const mapStateToProps = state => ({
	loading: state.powerplants.loading,
	currentYear: state.user.years.current,
	currentRegion: state.user.regions.current,
	currentPoint: state.user.regions.point
})

export default connect(mapStateToProps, {getConsumerPowerplants, clearPowerplantsData})(MyPowerplants)