import { MongoClient } from "mongodb";

async function handler(req, res) {
	if (req.method === "POST") {
		const { email, name, message } = req.body;

		if (
			!email ||
			!email.includes("@") ||
			!name ||
			name.trim() === " " ||
			!message ||
			message.trim() === ""
		) {
			res.status(422).json({ message: "Invalid input." });
			return;
		}

		const newMessage = {
			email: email,
			name: name,
			message: message,
		};

		let client;
		try {
			client = await MongoClient.connect(
				`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.w3igl.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`
			);
		} catch (error) {
			res.status(500).json({ message: error.message });
		}

		const db = client.db();
		try {
			await db.collection("emails").insertOne(newMessage);
		} catch (error) {
			client.close();
			res.status(500).json({ message: "Storing message failed." });
		}
		client.close();

		res
			.status(201)
			.json({ message: "Successfully stored message!", message: newMessage });
	}
}

export default handler;
