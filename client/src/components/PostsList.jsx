import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllPosts, deletePostHandler } from "../services/postService";

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [, setIsLoading] = useState([]);
  const [, setError] = useState(null);

  // Fetch posts from the API
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchAllPosts();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };
    loadPosts();
  }, []);

  const deletePost = async (id) => {
    try {
      await deletePostHandler(id);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index} className="post-content">
          <h2>
            <Link to={`posts/${post.id}`}>{post.title}</Link>
          </h2>
          <div className="post-links"></div>
          <Link to={`posts/${post.id}/edit`}>Edit</Link>
          <button onClick={() => deletePost(post.id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default PostsList;
