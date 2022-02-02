import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts");

function getPostData(filename) {
	const filePath = path.join(postDirectory, filename);
	const fileContents = fs.readFileSync(filePath, "utf-8");
	const { data, content } = matter(fileContents);
	const postSlug = filename.replace(/\.md$/, "");

	const postData = {
		slug: postSlug,
		...data,
		content,
	};
	return postData;
}

export const getAllPosts = () => {
	const postFiles = fs.readdirSync(postDirectory);

	const allPosts = postFiles.map((postFile) => {
		return getPostData(postFile);
	});

	return allPosts;
};

export function getFeaturedPosts() {
	const allPosts = getAllPosts();

	const featuredPosts = allPosts.filter((post) => post.isFeatured);

	return featuredPosts;
}
