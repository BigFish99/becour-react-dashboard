import React from 'react'

const Form = () => {
	return(
		<div className="Contact-Form">
			<div className="inner">
				<h1>Contact us</h1>
				<p className="lead">How can we help you</p>

				<form>
					<label htmlFor="message">Message us</label>
					<textarea id="message" rows="10"></textarea>
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	)
}

export default Form