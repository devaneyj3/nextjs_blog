import React from "react";

import PostGrid from "../PostGrid";

import classes from "./featured-posts.module.css";
export default function FeaturedPosts({ posts }) {
	return (
		<section className={classes.latest}>
			<h2>Featured Posts</h2>
			<PostGrid posts={posts} />
		</section>
	);
}
