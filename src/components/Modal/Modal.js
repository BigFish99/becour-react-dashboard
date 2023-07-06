import React from 'react'

export default function Modal({closeModal, children}) {
	return (
		<div className="Modal">
			<button>Close</button>
			{children}
		</div>
	)
}
