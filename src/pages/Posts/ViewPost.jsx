/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "components/Button";
import { HeadingLarge } from "styles/general-styles";
import { useEffect, useState } from "react";
import { postDeleted } from "features/post/postsSlice";

export function ViewPost() {
  const { pathname } = useLocation();
  const postId = parseInt(pathname.replace("/view-post/", ""));
  const [post, setPost] = useState({});
  const [postComments, setPostComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(
      (response) => {
        return response
          .json()
          .then((data) => {
            setPostComments(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    );
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(
      (response) => {
        return response
          .json()
          .then((data) => {
            setPost(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    );
  }, [postId]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(postDeleted({ id }));
    navigate("/post-list");
  };

  return (
    <>
      <div className="px-20 pt-40 pb-10">
        <div className="d-flex justify-content-between mb-10">
          <HeadingLarge uppercase="true">View Post</HeadingLarge>
        </div>
        <Button width="fit-content" onClick={() => navigate("/add-post")}>
          + Add Post
        </Button>
        <div className="py-10">
          <h3 className="text-xl font-bold tracking-tight text-gray-900">
            Title
          </h3>
          <div className="row mx-0">
            <div className="grid grid-cols-4">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 my-3 p-4 bg-white border border-gray-100 rounded-lg dark:bg-gray-100 light:border-gray-400">
                {post.title}
              </h5>
            </div>
          </div>
          <h3 className="text-xl font-bold tracking-tight text-gray-900">
            Body
          </h3>
          <div className="row mx-0">
            <div className="grid grid-cols-4">
              <p className="my-3 p-6 bg-white border border-gray-100 rounded-lg  dark:bg-gray-100 light:border-gray-400">
                {post.body}
              </p>
            </div>
          </div>

          <div className="mt-6 flex">
            <div className="me-3">
              <Button width="fit-content" onClick={() => handleDelete(postId)}>
                Delete
              </Button>
            </div>
            <div>
              <Button
                width="fit-content"
                onClick={() => navigate(`/edit-post/${postId}`)}
              >
                Update
              </Button>
            </div>
          </div>
          <h3 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
            Comments
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-5">
            {postComments.map(({ id, name, email, body }, i) => (
              <div
                key={i}
                className="p-6 bg-white border border-gray-200 rounded-lg shadow light:border-gray-700"
              >
                <a
                  onClick={() => navigate(`/view-post/${id}`)}
                  className="cursor-pointer"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {name}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {email}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
