import React, { useState, useEffect } from 'react'
import './Table.css'


const TableContent = ({ headers, rows}) => {

	return (
		<table>
			<thead>
				<tr>
					{headers.map((title, headIndex) => <th key={headIndex}>{title}</th>)}
				</tr>
			</thead>
			<tbody>
				{
					rows.map((row, rowIndex) =>
						<tr key={rowIndex}>
							{
								row.items.map((cell, cellIndex) =>
									<td key={cellIndex}>
										{
											`${cell}` === '#' || `${cell}`.includes('http')
												?
												cell !== '#' && <a className="download-button" rel="noreferrer" href={cell} target="_blank" title="download pdf">Download</a>
												: `${cell}`
										}
									</td>
								)
							}
						</tr>
					)
				}
			</tbody>
		</table>
	)
}

const Table = ({ headers, rows, select }) => {

	const [tableRows, setTableRows] = useState([]);

	useEffect(() => {
		if(rows.length > 0) {
			let tempList = []
			rows.forEach((row, id) => {
				tempList.push({
					id: id,
					selected: false,
					items: row
				})
			})
			setTableRows(tempList)
		}
	}, [rows])

	const submitForm = e => {
		e.preventDefault()

	}

	if (select) {
		return (
			<form className="form-select" onSubmit={submitForm}>
				<button className="export-button" type="submit">Export CSV</button>
				<div className="Table">
					<TableContent headers={headers} rows={tableRows} />
				</div>
			</form>
		)
	} else {
		return (
			<div className="Table">
				<TableContent headers={headers} rows={rows} />
			</div>
		)
	}
}

export default Table