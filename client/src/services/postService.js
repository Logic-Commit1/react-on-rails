import { API_URL } from "../constants";

const fetchAllPosts = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

const deletePost = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "delete",
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
};

const fetchPost = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "get",
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

const createPost = async (postData) => {
  const response = await fetch(API_URL, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

const updatePost = async (id, post) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

export { fetchAllPosts, deletePost, fetchPost, createPost, updatePost };
