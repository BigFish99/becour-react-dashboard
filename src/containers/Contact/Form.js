import React, {useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import axios from 'axios'

const ThankYou = () => {

	const transitions = {
		initial: {opacity: 0},
		animate: {opacity: 1},
		exit: {opacity: 0}
	}

	return(
		<motion.div
			variants={transitions}
			initial="initial"
			animate="animate"
			exit="exit"
			className="thankYou"
		>
			<h3>Thank you for your message, we will get back to you</h3>
		</motion.div>
	)
}

const FormSection = ({sendForm, setForm, message}) => {

	const transitions = {
		initial: {opacity: 0},
		animate: {opacity: 1},
		exit: {opacity: 0}
	}

	return(
		<motion.form
			variants={transitions}
			initial="initial"
			animate="animate"
			exit="exit"
			onSubmit={sendForm}
		>
			<label htmlFor="message">Message us</label>
			<textarea id="message" rows="10" value={message} onChange={e => setForm(e.currentTarget.value)}></textarea>
			<button type="submit">Submit</button>
		</motion.form>
	)
}

const Form = () => {

	const [form, setForm] = useState({
		sent: false,
		error: false,
		message: ''
	})

	const sendForm = e => {
		e.preventDefault();
		axios({
			method: 'post',
			url: `${process.env.REACT_APP_API_URL}/sendContactForm`,
			headers: {
				Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
				'Content-Type': 'application/json'
			},
			data: {
				text: form.message
			}
		})
			.then(response => {
				if(response.status === 200) {
					setForm({
						...form,
						sent: true
					})
				} else {
					setForm({
						...form,
						error: true
					})
				}
			});
	}

	const updateText = text => {
		setForm({
			...form,
			message: text
		})
	}

	return(
		<div className="Contact-Form">
			<div className="inner">
				<h1>Contact us</h1>
				<p className="lead">How can we help you</p>
				<AnimatePresence>
					{
						!form.sent
						? <FormSection sendForm={sendForm} setForm={updateText} message={form.message} />
						: <ThankYou />
					}
				</AnimatePresence>
				{
					form.error &&
					<p className="errorMessage">There was an error sending the form, please try again later or send us an email to <a href="mailto:info@becour.com">info@becour.com</a></p>
				}
			</div>
		</div>
	)
}

export default Form