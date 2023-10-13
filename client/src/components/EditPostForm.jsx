import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPost, updatePost } from "../services/postService";

function EditPostForm() {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadPost = async () => {
      try {
        const response = await fetchPost(id);
        setPost(response);
      } catch (error) {
        console.error(error);
      }
    };
    loadPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPostData = {
      title: post.title,
      body: post.body,
    };
    try {
      const response = await updatePost(id, updatedPostData);
      navigate(`/posts/${response.id}`);
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
