import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../constants";

function EditPostForm() {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentPost = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}`);
        if (response.ok) {
          const json = await response.json();
          setPost(json);
        } else {
          throw response;
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchCurrentPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });
      if (response.ok) {
        const json = await response.json();
        navigate(`/posts/${id}`);
      } else {
        throw response;
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2>Edit Post</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="post-title">Title</label>
        <br />
        <input
          type="text"
          id="post-title"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <br />
        <br />
        <label htmlFor="post-body">Body</label>
        <br />
        <textarea
          id="post-body"
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditPostForm;
