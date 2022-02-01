import React from "react";

import classes from "./post-content.module.css";
import PostHeader from "./post-header";

import ReactMarkdown from "react-markdown";

const POST = {
	slug: "getting-started-with-nextjs3",
	title: "Getting Started with Next JS",
	image: "getting-started-nextjs.png",
	excerpt:
		"NextJS is a React framework for production - It makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
	date: "2022-01-10",
	content: "# This is my first post",
};
export default function PostContent() {
	const imagePath = `/images/posts/${POST.slug}/${POST.image}`;
	return (
		<article className={classes.content}>
			<PostHeader title={POST.title} image={imagePath} />
			<ReactMarkdown>{POST.content}</ReactMarkdown>
		</article>
	);
}
