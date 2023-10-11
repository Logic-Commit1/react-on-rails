import React from "react";
import { Route, Routes } from "react-router-dom";
import PostsList from "./PostsList";
import PostDetails from "./PostDetails";
import NewPost from "./NewPost";
import EditPostForm from "./EditPostForm";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PostsList />} />
      <Route path="posts/:id" element={<PostDetails />} />
      <Route path="posts/:id/edit" element={<EditPostForm />} />
      <Route path="/new" element={<NewPost />} />
    </Routes>
  );
}

export default AppRoutes;
