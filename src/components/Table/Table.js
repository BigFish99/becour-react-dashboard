import React, { useState, useEffect } from 'react'
import { exportCSV } from './exportCSV'
import './Table.css'

const TableContent = ({ headers, rows, select, selectRow, selectAllRows, allSelected }) => {

	return (
		<table className="Table">
			<thead>
				<tr>
					{select && <td className="select-box"><input checked={allSelected} onChange={selectAllRows} type="checkbox" /></td>}
					{headers.map((title, headIndex) => <th key={headIndex}>{title}</th>)}
				</tr>
			</thead>
			<tbody>
				{
					rows.map((row, rowIndex) =>
						<tr key={rowIndex}>
							{select &&
								<td className="select-box">
									<input type="checkbox" checked={row.selected} onChange={e => selectRow(e, rowIndex)} />
								</td>
							}
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

	const [allSelected, setAllSelected] = useState(false);
	const [exportAvailable, setExportAvailable] = useState(false)
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

	useEffect(() => {
		setExportAvailable(tableRows.some(row => { return row.selected }))
		setAllSelected(tableRows.every(row => { return row.selected }))
	},[tableRows])

	const selectRow = (e, index) => {
		let tempList = Array.from(tableRows)
		tempList[index].selected = !tempList[index].selected
		setTableRows(tempList)
	}

	const selectAllRows = () => {
		let tempList = Array.from(tableRows)
		if(!allSelected) {
			tempList.forEach((row) => row.selected = true)
		} else {
			tempList.forEach(row => row.selected = false)
		}
		setTableRows(tempList)
		setAllSelected(!allSelected)
	}

	const submitForm = e => {
		e.preventDefault()

		let indexList = [];
		tableRows.forEach(row => {
			if(row.selected) {
				indexList.push(row.id)
			}
		})

		// Sort selected items
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
				<TableContent headers={headers} rows={tableRows} select={true} selectRow={selectRow} selectAllRows={selectAllRows} allSelected={allSelected} />
				{
					exportAvailable &&
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