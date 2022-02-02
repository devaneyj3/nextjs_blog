import React, { useState } from "react";

import axios from "axios";

import classes from "./contact-form.module.css";

export default function ContactForm() {
	const [data, setData] = useState({
		email: "",
		name: "",
		message: "",
	});

	async function sendMessageHandler(e) {
		e.preventDefault();
		const { email, name, message } = data;
		console.log(email, name, message);

		const res = await axios.post("/api/contact", {
			email: email,
			name: name,
			message: message,
		});

		console.log(res);
	}

	function onChange(e) {
		const { name, value } = e.target;
		setData((prevState) => {
			return { ...prevState, [name]: value };
		});
	}
	return (
		<section className={classes.contact}>
			<h1>How can I help you?</h1>
			<form className={classes.form} onSubmit={sendMessageHandler}>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor="email">Your Email</label>
						<input
							type="email"
							name="email"
							id="email"
							value={data.email}
							onChange={onChange}
							required
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor="name">Your Name</label>
						<input
							type="text"
							name="name"
							id="name"
							onChange={(e) => onChange(e)}
							value={data.name}
							required
						/>
					</div>
				</div>
				<div className={classes.control}>
					<label htmlFor="message">Your Message</label>
					<textarea
						id="message"
						name="message"
						onChange={onChange}
						value={data.message}
						required
						rows="5"></textarea>
				</div>
				<div className={classes.actions}>
					<button>Send Message</button>
				</div>
			</form>
		</section>
	);
}
