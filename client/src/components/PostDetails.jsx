import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { API_URL } from "../constants";

function PostDetails() {
  const [post, setPost] = useState(null);
  const [loading,setLoading] = useState(true)
  const { id } = useParams();

  useEffect(() => {
    const fetchCurrentPost = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}`);
        if (response.ok) {
          const json = await response.json();
          setPost(json);
          setLoading(false)
        } else {
          throw response;
        }
      } catch (error) {
        console.log("Error occured: ", error);
      }
    };
    fetchCurrentPost();
  }, [id]);

  if (loading) {
    return <h1>Loading... </h1>;
  }

  return (
    <div>
      <p>Post details below</p>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/">Back to Posts</Link>
    </div>
  );
}

export default PostDetails;
