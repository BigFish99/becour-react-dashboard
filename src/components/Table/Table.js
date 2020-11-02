import React from 'react'
import './Table.css'

const Table = ({headers, rows, fixed}) => {
	return(
		<table className="Table">
			<thead>
				<tr>
					{ headers.map((title, headIndex) => <th key={headIndex}>{title}</th>) }
				</tr>
			</thead>
			<tbody>
				{
					rows.map((row, rowIndex) =>
						<tr key={rowIndex}>
							{
								row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)
							}
						</tr>
					)
				}
			</tbody>
		</table>
	)
}

export default Table