import React from "react";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

import classes from "./post-content.module.css";
import PostHeader from "./post-header";

import ReactMarkdown from "react-markdown";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

export default function PostContent({ post }) {
	const imagePath = `/images/posts/${post.slug}/${post.image}`;
	const customRenderers = {
		img(image) {
			return (
				<Image
					src={`/images/posts/${post.slug}/${image.src}`}
					alt={image.alt}
					height={600}
					width={600}
				/>
			);
		},
		code(code) {
			const { className, children } = code;
			const language = className.split("-")[1];
			return (
				<SyntaxHighlighter
					style={atomDark}
					language={language}
					children={children}
				/>
			);
		},
	};
	return (
		<article className={classes.content}>
			<PostHeader title={post.title} image={imagePath} />
			<ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
		</article>
	);
}
