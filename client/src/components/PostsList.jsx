import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import { Link } from "react-router-dom";
import DeletePost from "./DeletePost";

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [, setIsLoading] = useState([]);
  const [, setError] = useState(null);

  const deletePost = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "delete",
      });
      if (response.ok) {
        setPosts(posts.filter((post) => post.id !== id));
      } else {
        throw response;
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch posts from the API
  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const json = await response.json();
          setPosts(json);
        } else {
          throw response;
        }
      } catch (error) {
        setError(error);
        console.log(`Error occured: ${error}`);
      } finally {
        setIsLoading(false);
      }
    }
    loadPosts();
  }, []);

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
