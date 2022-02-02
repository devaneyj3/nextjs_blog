import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/post-util";
import Head from "next/head";

const AllPostsPage = ({ posts }) => {
	return (
		<>
			<Head>
				<title>All Posts</title>
				<meta
					name="description"
					content="A list of all programming related tutotials and posts."
				/>
			</Head>
			<AllPosts posts={posts} />;
		</>
	);
};
export function getStaticProps() {
	const allPosts = getAllPosts();
	return {
		props: { posts: allPosts },
	};
}

export default AllPostsPage;
