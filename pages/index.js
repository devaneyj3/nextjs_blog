import Hero from "../component/hero";
import FeaturedPosts from "../component/posts/featured-posts";
import { getFeaturedPosts } from "../lib/post-util";

import Head from "next/head";

const HomePage = ({ posts }) => {
	return (
		<div>
			<Head>
				<title>Jordan's Blog</title>
				<meta
					name="description"
					content="I post about programming and web development."
				/>
			</Head>
			<Hero />
			<FeaturedPosts posts={posts} />
		</div>
	);
};

export function getStaticProps() {
	const featuredPosts = getFeaturedPosts();
	return {
		props: { posts: featuredPosts },
	};
}

export default HomePage;
