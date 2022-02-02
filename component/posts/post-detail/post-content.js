import React from "react";
import Image from "next/image";

import classes from "./post-content.module.css";
import PostHeader from "./post-header";

import ReactMarkdown from "react-markdown";
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
	};
	return (
		<article className={classes.content}>
			<PostHeader title={post.title} image={imagePath} />
			<ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
		</article>
	);
}
