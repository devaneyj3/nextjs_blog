import PostContent from "../../component/posts/post-detail/post-content";

import { getPostData, readFiles } from "../../lib/post-util";

import Head from "next/head";

const PostPage = ({ post }) => {
	return (
		<>
			<Head>
				<title>{post.title}</title>
				<meta name="description" content={post.excerpt} />
			</Head>
			<PostContent post={post} />;
		</>
	);
};

export function getStaticPaths() {
	const files = readFiles();
	const slugs = files.map((filename) => filename.replace(/\.md$/, ""));
	return {
		paths: slugs.map((slug) => ({ params: { slug: slug } })),
		fallback: false,
	};
}
export function getStaticProps(context) {
	const { params } = context;
	const { slug } = params;
	const post = getPostData(slug);

	return {
		props: {
			post: post,
		},
	};
}

export default PostPage;
