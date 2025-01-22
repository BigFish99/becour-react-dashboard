import React from 'react'
import logo from '../../assets/svg/marbly-logo.svg'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import './Header.css'

const Header = ({matching}) => {
	return (
		<>
			<div className="Header-top">
				<div className="Header-logo">
					<img src={logo} alt="Home" />
				</div>
				<nav className="topNavigation">
					<ul className="topNavigationMenu">
						<li className="topMenuItem">
							<a href="//marbly.becour.com">Home</a>
						</li>
						<li className="topMenuItem">
							<a href="//marbly.becour.com/marketplace">Marketplace</a>
						</li>
						<li className="topMenuItem">
							<NavLink to="/" className="portfolio">My portfolio</NavLink>
						</li>
						<li className="topMenuItem">
							<a className="button" href="//becour.com">Becour.com</a>
						</li>
					</ul>
				</nav>
			</div>
			<div className="Header-bottom">
				<nav className="bottomNavigation">
					<ul className="bottomNavigationMenu">
						<li className="bottomMenuItem">
							<NavLink to="/">Dashboard</NavLink>
						</li>
						<li className="bottomMenuItem">
							<NavLink to="/my-documents">My Documents</NavLink>
						</li>
						<li className="bottomMenuItem">
							<NavLink to="/my-consumption">My Consumption</NavLink>
						</li>
						<li className="bottomMenuItem">
							<NavLink to="/my-powerplants">My Power plants</NavLink>
						</li>
						{
							matching &&
							<li className="bottomMenuItem">
								<NavLink to="/matching">Matching</NavLink>
							</li>
						}
						<li className="bottomMenuItem">
							<NavLink to="/contact">Contact</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</>
	)
}

const mapStateToProps = state => ({
	matching: state.user.matching
})

export default connect(mapStateToProps)(Header)