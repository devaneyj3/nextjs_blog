import PostContent from "../../component/posts/post-detail/post-content";

import { getPostData, readFiles } from "../../lib/post-util";

const PostPage = ({ post }) => {
	return <PostContent post={post} />;
};

export function getStaticPaths() {
	const files = readFiles();
	const slugs = files.map((filename) => filename.replace(/\.md$/, ""));
	return {
		paths: slugs.map((slug) => ({ params: { slug: slug } })),
		fallback: true,
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
