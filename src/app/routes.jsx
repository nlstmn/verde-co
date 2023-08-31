import { Routes as ReactRoutes, Route, Navigate } from "react-router-dom";
import { AddPost } from "pages/Posts/AddPost";
import { PostList } from "pages/Posts/PostList";
import { EditPost } from "pages/Posts/EditPost";
import { ViewPost } from "pages/Posts/ViewPost";

function Routes() {
  return (
    <ReactRoutes>
      <Route path="/" element={<Navigate replace to="/post-list" />} />
      <Route path="/add-post" element={<AddPost />} />
      <Route path="/post-list" element={<PostList />} />
      <Route path="/edit-post/*" element={<EditPost />} />
      <Route path="/view-post/*" element={<ViewPost />} />
    </ReactRoutes>
  );
}

export default Routes;
