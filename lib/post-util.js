import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts");

export function readFiles() {
	const postFiles = fs.readdirSync(postDirectory);
	return postFiles;
}
export function getPostData(filename) {
	const postSlug = filename.replace(/\.md$/, "");
	const filePath = path.join(postDirectory, `${postSlug}.md`);
	const fileContents = fs.readFileSync(filePath, "utf-8");
	const { data, content } = matter(fileContents);

	const postData = {
		slug: postSlug,
		...data,
		content,
	};
	return postData;
}

export const getAllPosts = () => {
	const files = readFiles();

	const allPosts = files.map((postFile) => {
		return getPostData(postFile);
	});

	return allPosts;
};

export function getFeaturedPosts() {
	const allPosts = getAllPosts();

	const featuredPosts = allPosts.filter((post) => post.isFeatured);

	return featuredPosts;
}
