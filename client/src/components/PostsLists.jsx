import { useEffect, useState } from "react";
import { API_URL } from "../constants";

function PostsLists() {
  const [posts, setPosts] = useState([]);
  const [, setIsLoading] = useState([]);
  const [, setError] = useState(null);

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
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsLists;
