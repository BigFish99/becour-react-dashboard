import React from 'react'
import './NoDocuments.css'


const NoDocuments = ({type}) => {

	const classNames = type === 'empty' ? 'NoDocuments no-documents' : 'NoDocuments select'
	const title = type === 'empty' ? 'No documents' : 'Select a country';
	const text = type === 'empty' ? 'There are no documents for the current selection' : 'Please select a country to view documents';

	return(
		<div className={classNames}>
			<h1>{title}</h1>
			<p>{text}</p>
		</div>
	)
}

export default NoDocuments