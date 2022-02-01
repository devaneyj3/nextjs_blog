import React from "react";
import PostItem from "../PostItem";

import classes from "./post-grid.module.css";

export default function PostGrid({ posts }) {
	return (
		<ul className={classes.grid}>
			{posts.map((post) => (
				<PostItem post={post} />
			))}
		</ul>
	);
}
