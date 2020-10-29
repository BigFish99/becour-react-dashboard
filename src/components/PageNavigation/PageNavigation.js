import React from 'react'
import './PageNavigation.css'
import {NavLink} from 'react-router-dom'
import {setCurrentYear} from '../../store/user/actions'
import {connect} from 'react-redux'

const PageNavigation = ({title, navigation, yearsAvailable, currentYear, setCurrentYear}) => {
	return(
		<header className="PageNavigation">
			{title && <h1 dangerouslySetInnerHTML={{__html: title}} />}
			{
				navigation && navigation.length > 0 &&
					<nav className="PageNavigation-navigation">
						<ul>
							{
								navigation.map((item, i) =>
									<li key={i}>
										<NavLink exact to={item.path}>{item.title}</NavLink>
									</li>
								)
							}
						</ul>
					</nav>
			}
			{
				yearsAvailable && yearsAvailable.length > 0 &&
					<nav className="PageNavigation-years">
						<ul>
							{
								yearsAvailable.map(year =>
									<li key={year}>
										<button onClick={() => setCurrentYear(year) } className={year === currentYear ? 'active' : ''}>{year}</button>
									</li>
								)
							}
						</ul>
					</nav>
			}
		</header>
	)
}

const mapStateToProps = state => ({
	yearsAvailable: state.user.years.available,
	currentYear: state.user.years.current
})

export default connect(mapStateToProps, {setCurrentYear})(PageNavigation)