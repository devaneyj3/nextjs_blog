import Hero from "../component/hero";
import FeaturedPosts from "../component/posts/featured-posts";
import { getFeaturedPosts } from "../lib/post-util";

const HomePage = ({ posts }) => {
	return (
		<div>
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
