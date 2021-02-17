import React from 'react'
import './NoDocuments.css'


const NoDocuments = ({type}) => {

	const title = type === 'empty' ? 'No documents' : 'Select a country';
	const text = type === 'empty' ? 'There are no documents for the current selection' : 'Please select a country to view documents';

	return(
		<div className="NoDocuments">
			<h1>{title}</h1>
			<p>{text}</p>
		</div>
	)
}

export default NoDocuments