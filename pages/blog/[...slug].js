import { useRouter } from "next/router";

function BlogPostsPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>Blog Post</h1>
    </div>
  )
}

export default BlogPostsPage;

// router.query path to http://localhost:3000/blog/whatever/you/want
// returns {slug: ["whatever", "you", "want"] } 