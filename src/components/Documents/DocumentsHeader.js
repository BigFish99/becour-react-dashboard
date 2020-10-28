import React from 'react'
import {connect} from 'react-redux'
import {updateCurrentYear} from '../../store/documents/actions'
import {NavLink} from 'react-router-dom'

const DocumentHeader = ({country, yearsAvailable, currentYear, updateCurrentYear}) => {

	return(
		<header className="DocumentsHeader">
			<h1>My documents</h1>
			<nav className="DocumentsHeader-navigation">
				<ul>
					<li>
						<NavLink exact to={`/my-documents/${country}/`}>Trade Confirmations</NavLink>
					</li>
					<li>
						<NavLink to={`/my-documents/${country}/billing-history`}>Billing History</NavLink>
					</li>
					<li>
						<NavLink to={`/my-documents/${country}/contracts`}>Contracts</NavLink>
					</li>
					<li>
						<NavLink to={`/my-documents/${country}/reporting-data`}>Reporting data</NavLink>
					</li>
				</ul>
			</nav>
			{
				yearsAvailable && yearsAvailable.length > 0 &&
					<nav className="DocumentsHeader-years">
						<ul>
							{
								yearsAvailable.map(year =>
									<li key={year}>
										<button onClick={() => updateCurrentYear(year) } className={year === currentYear ? 'active' : ''}>{year}</button>
									</li>
								)
							}
						</ul>
					</nav>
			}
		</header>
	)
}

export default connect(null, {updateCurrentYear})(DocumentHeader)