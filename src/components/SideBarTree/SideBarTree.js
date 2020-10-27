import React, { useState } from 'react'
import { Collapse } from 'react-collapse'
import {NavLink} from 'react-router-dom'
import testData from './test-data.json'
import './SideBarTree.css'

const Countries = ({ countries, active }) => {
	return (
		<Collapse isOpened={active} theme={{ collapse: 'wrapper', content: 'content' }}>
			<ul>
				{
					countries.map((country, i) => <li key={i}><NavLink to={`/my-documents${country.path}`}>{country.name}</NavLink></li>)
				}
			</ul>
		</Collapse>
	)
}

const Region = ({ name, countries, path }) => {
	const [active, setActive] = useState(false)
	return (
		<div className="SideBarTree-region">
			<button className={active ? 'active' : ''} onClick={() => setActive(!active)}>{active ? '–' : '+'}</button>
			{ path && <NavLink to={`/my-documents${path}`}>{name}</NavLink> }
			{
				countries.length > 0
				&& <Countries countries={countries} active={active} />
			}
		</div>
	)
}

export default () => {
	return (
		<nav className="SideBarTree">
			<div className="SideBarTree-logo"></div>
			<div className="list">
				{
					testData.length > 0
					&& testData.map((region, i) => <Region key={i} {...region} />)
				}
			</div>
		</nav>
	)
}