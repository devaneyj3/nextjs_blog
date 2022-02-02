import React, { useState, useEffect } from "react";

import axios from "axios";
import Notification from "../../ui/notification";

import classes from "./contact-form.module.css";

async function sendContactDetails(contactDetails) {
	const res = await axios.post("/api/contact", {
		email: contactDetails.email,
		name: contactDetails.name,
		message: contactDetails.message,
	});

	if (res.status !== 201) {
		throw new Error(data.message || "Something went wrong");
	}
}
export default function ContactForm() {
	const [data, setData] = useState({
		email: "",
		name: "",
		message: "",
	});
	const [requestStatus, setRequestStatus] = useState();
	const [requestError, setRequestError] = useState();

	useEffect(() => {
		if (requestStatus === "success" || requestStatus === "error") {
			const timer = setTimeout(() => {
				setRequestError(null);
				setRequestStatus(null);
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [requestStatus]);
	async function sendMessageHandler(e) {
		e.preventDefault();
		const { email, name, message } = data;

		setRequestStatus("pending");

		try {
			await sendContactDetails({
				email: email,
				name: name,
				message: message,
			});
			setRequestStatus("success");
			setData({ email: "", name: "", message: "" });
		} catch (error) {
			setRequestError(error.message);
			setRequestStatus("error");
		}
	}
	let notification;

	if (requestStatus === "pending") {
		notification = {
			status: "pending",
			title: "Sending message...",
			message: "Your message is on its way!",
		};
	}
	if (requestStatus === "success") {
		notification = {
			status: "success",
			title: "Success!",
			message: "Message sent successfully!",
		};
	}
	if (requestStatus === "error") {
		notification = {
			status: "error",
			title: "Error!",
			message: requestError,
		};
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
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
		</section>
	);
}
