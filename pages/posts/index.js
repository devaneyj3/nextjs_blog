import AllPosts from "../../component/AllPosts";
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
const AllPostsPage = () => {
	return <AllPosts posts={posts} />;
};

export default AllPostsPage;
