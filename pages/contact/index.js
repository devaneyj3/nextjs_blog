import ContactForm from "../../component/contact/contact-form";

import Head from "next/head";

const ContactPage = () => {
	return (
		<>
			<Head>
				<meta name="description" content="Send me your messaages!" />
			</Head>
			<ContactForm />;
		</>
	);
};

export default ContactPage;
