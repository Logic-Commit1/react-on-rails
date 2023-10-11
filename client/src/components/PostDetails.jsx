import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { deletePostHandler, fetchPost } from "../services/postService";

function PostDetails() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadPost = async () => {
      try {
        const data = await fetchPost(id);
        setPost(data);
        setLoading(false);
      } catch (error) {
        console.error("Error occured: ", error);
      }
    };
    loadPost();
  }, [id]);

  const deletePost = async () => {
    try {
      await deletePostHandler(id);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <h1>Loading... </h1>;
  }

  return (
    <div>
      <p>Post details below</p>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to={`/posts/${post.id}/edit`}>Edit</Link>
      {" | "}
      <Link to="/">Back to Posts</Link>
      {" | "}
      <button onClick={deletePost}>Delete</button>
    </div>
  );
}

export default PostDetails;
