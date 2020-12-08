import React from 'react'
import {peoplePowerplants, peopleTechnical} from './data'

const Person = ({name, email, phone, image}) => {
	return(
		<div className="Contact-Person">
			<img src={image} alt={name} />
			<div className="info">
				<p className="name">{name}</p>
				<p className="email"><a href={`mailto:${email}`}>{email}</a></p>
				<p className="phone">{phone}</p>
			</div>
		</div>
	)
}

const People = () => {
	return(
		<div className="Contact-People">
			<div className="section">
				<h3>Powerplants and customer enquiries:</h3>
				{ peoplePowerplants.map((person, i) => <Person key={`pp_${i}`} {...person} />) }
			</div>
			<div className="section">
				<h3>Technical enquiries and support:</h3>
				{ peopleTechnical.map((person, i) => <Person key={`pt_${i}`} {...person} />) }
			</div>
		</div>
	)
}

export default People