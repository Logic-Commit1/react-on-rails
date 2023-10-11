import { API_URL } from "../constants";

const fetchAllPosts = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw response;
  }

  return response.json();
};

const deletePostHandler = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "delete",
  });
  if (!response.ok) {
    throw response;
  }
};

const fetchPost = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "get",
  });
  if (!response.ok) {
    throw response;
  }
  return response.json();
};

export { fetchAllPosts, deletePostHandler, fetchPost };
