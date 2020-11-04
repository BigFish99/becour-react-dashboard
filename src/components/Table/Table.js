import React, { useState, useRef } from 'react'
import { exportCSV } from './exportCSV'
import './Table.css'

const TableContent = ({ headers, rows, select, selectRow }) => {

	const table = useRef(null)

	const selectAllRows = e => {
		Array.from(table.current.querySelectorAll('input[type=checkbox]')).forEach(input => {
			console.log(input.value)
		})
		// if(e.currentTarget.checked) {
		// 	if(table !== null) {
		// 		Array.from(table.current.querySelectorAll('input[type=checkbox]')).forEach(input => input.checked = true)
		// 	}
		// } else {
		// 	if(table !== null) {
		// 		Array.from(table.current.querySelectorAll('input[type=checkbox]')).forEach(input => input.checked = false)
		// 	}
		// }
	}

	return (
		<table className="Table">
			<thead>
				<tr>
					{select && <td className="select-box"><input onChange={selectAllRows} type="checkbox" /></td>}
					{headers.map((title, headIndex) => <th key={headIndex}>{title}</th>)}
				</tr>
			</thead>
			<tbody ref={table}>
				{
					rows.map((row, rowIndex) =>
						<tr key={rowIndex}>
							{select &&
								<td className="select-box">
									<input type="checkbox" value={rowIndex} onChange={e => selectRow(e, rowIndex)} />
								</td>
							}
							{
								row.map((cell, cellIndex) =>
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

	const [exportList, setExportList] = useState([]);

	const selectRow = (e, index) => {
		if (e.currentTarget.checked) {
			let list = Array.from(exportList)
			list.push(index)
			setExportList(list)
		} else {
			let list = Array.from(exportList)
			list.forEach((id, arrayIndex) => {
				if (list[arrayIndex] === index) {
					list.splice(arrayIndex, 1)
				}
			})
			setExportList(list)
		}
	}

	const submitForm = e => {
		e.preventDefault()

		// Sort selected items
		let indexList = Array.from(exportList)
		let documentList = []
		indexList.sort()
		indexList.forEach(index => {
			documentList.push(rows[index])
		})

		// Create CSV and download
		exportCSV(headers, documentList)

	}

	if (select) {
		return (
			<form className="form-select" onSubmit={submitForm}>
				<TableContent headers={headers} rows={rows} select={true} selectRow={selectRow} />
				{
					exportList.length > 0 &&
					<button type="submit">Export CSV</button>
				}
			</form>
		)
	} else {
		return (
			<TableContent headers={headers} rows={rows} />
		)
	}
}

export default Table