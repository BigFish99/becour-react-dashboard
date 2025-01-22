import React from 'react'
import { connect } from 'react-redux'
import { motion } from 'framer-motion'
import {deactivateModal} from '../../store/modal/actions'
import './Modal.css'

function Modal({deactivateModal, content}) {

	return (
		<div className="Modal">
			<motion.div
				initial={{opacity: 0, y: 50}}
				animate={{opacity: 1, y: 0}}
				exit={{opacity: 0, y: 50, transition: {duration: .2, ease: 'easeInOut'}}}
				className="content content-box"
			>
				<button className="close" onClick={deactivateModal}>Close</button>
				{content}
			</motion.div>
			<motion.div onClick={deactivateModal} className="bg" initial={{opacity: 0}} animate={{opacity: .7}} exit={{opacity: 0}} />
		</div>
	)
}

const mapStateToProps = state => ({
	modalActive: state.modal.active,
	content: state.modal.content
})

export default connect(mapStateToProps, {deactivateModal})(Modal)