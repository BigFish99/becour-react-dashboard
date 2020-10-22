import React from 'react'

export default props => {
	return(
		<div className="Documents">
			{ props.match.params.id && <h1>{props.match.params.id}</h1> }
		</div>
	)
}