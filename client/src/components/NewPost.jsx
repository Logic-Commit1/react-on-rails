import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../services/postService";

function NewPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const postData = { title, body };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createPost(postData);
      navigate(`/posts/${response.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="body">Body</label>
          <input
            type="text"
            name="body"
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default NewPost;
