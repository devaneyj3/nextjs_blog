import Hero from "../component/Hero";
import FeaturedPosts from "../component/FeaturedPosts";

const posts = [
	{
		slug: "getting-started-with-nextjs3",
		title: "Getting Started with Next JS",
		image: "getting-started-nextjs.png",
		excerpt:
			"NextJS is a React framework for production - It makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
		date: "2022-01-10",
	},
	{
		slug: "getting-started-with-nextjs4",
		title: "Getting Started with Next JS",
		image: "getting-started-nextjs.png",
		excerpt:
			"NextJS is a React framework for production - It makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
		date: "2022-01-10",
	},
	{
		slug: "getting-started-with-nextjs5",
		title: "Getting Started with Next JS",
		image: "getting-started-nextjs.png",
		excerpt:
			"NextJS is a React framework for production - It makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
		date: "2022-01-10",
	},
];
const HomePage = () => {
	return (
		<div>
			<Hero />
			<FeaturedPosts posts={posts} />
		</div>
	);
};

export default HomePage;
