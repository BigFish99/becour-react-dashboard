import React from 'react'
import {connect} from 'react-redux'
import {setCurrentRegion, toggleRegionExpand, setRegionExpand, setRegionToCompanyOverview} from '../../store/user/actions'
import { Collapse } from 'react-collapse'
import './SideBarTree.css'

const Children = ({ children, active, setCurrentRegion, currentRegion }) => {
	return (
		<Collapse isOpened={active} theme={{ collapse: 'wrapper', content: 'content' }}>
			<ul>
				{
					children.map((child, i) => <li key={i}><button className={child.id === currentRegion.id ? 'sublink active' : 'sublink'} onClick={() => setCurrentRegion(child.id)}>{child.name}</button></li>)
				}
			</ul>
		</Collapse>
	)
}

const Region = ({ name, children, id, setCurrentRegion, currentRegion, toggleRegionExpand, setRegionExpand, index, expanded }) => {
	return (
		<div className="SideBarTree-region">
			<button className={expanded ? 'expand active' : 'expand'} onClick={() => toggleRegionExpand(index)}></button>
			<button className={currentRegion.id === id ? 'link active' : 'link'} onClick={() => { setCurrentRegion(id); if(!expanded) { setRegionExpand(index); }  }}>{name}</button>
			{
				children.length > 0
				&& <Children children={children} active={expanded} setCurrentRegion={setCurrentRegion} currentRegion={currentRegion} />
			}
		</div>
	)
}

const SideBarTree = ({logo, regions, setCurrentRegion, currentRegion, toggleRegionExpand, setRegionExpand, setRegionToCompanyOverview}) => {
	return (
		<nav className="SideBarTree">
			<div className="inner">
				<div className="SideBarTree-logo">
					<div className={logo ? 'SideBarTree-logo-inner' : 'SideBarTree-logo-inner no-logo'}>
						{
							logo &&
							<img src={logo} alt="Company logo" />
						}
					</div>
				</div>
				<button className={currentRegion.id === 'all' ? 'companyOverview active' : 'companyOverview'} onClick={() => setRegionToCompanyOverview()}>All regions</button>
				<div className="list">
					{
						regions && regions.length > 0
						&& regions.map((region, i) => <Region key={i} index={i} {...region} currentRegion={currentRegion} setCurrentRegion={setCurrentRegion} toggleRegionExpand={toggleRegionExpand} setRegionExpand={setRegionExpand} />)
					}
				</div>
			</div>
		</nav>
	)
}

const mapStateToProps = state => ({
	logo: state.user.logo,
	currentRegion: state.user.regions.current,
	regions: state.user.regions.available
})

export default connect(mapStateToProps, {setCurrentRegion, toggleRegionExpand, setRegionExpand, setRegionToCompanyOverview})(SideBarTree)