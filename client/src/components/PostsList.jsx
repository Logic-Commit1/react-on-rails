import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllPosts, deletePost } from "../services/postService";

function PostsList() {
  const [posts, setPosts] = useState([]);

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

  const deletePostHandler = async (id) => {
    try {
      await deletePost(id);
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
          <button onClick={() => deletePostHandler(post.id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default PostsList;
