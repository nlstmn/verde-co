import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "components/Button";
import { HeadingLarge } from "styles/general-styles";
import { useState } from "react";
import { postUpdated } from "features/post/postsSlice";

export function EditPost() {
  const { pathname } = useLocation();
  const postId = parseInt(pathname.replace("/edit-post/", ""));

  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === postId)
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const [error, setError] = useState(null);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleBody = (e) => setBody(e.target.value);

  const handleClick = () => {
    if (title && body) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          body,
        }),
      })
        .then((response) => {
          dispatch(
            postUpdated({
              id: postId,
              title,
              body,
              userId: 1,
            })
          );
        })
        .catch((err) => {
          console.log(err);
        });

      setError(null);
      navigate("/post-list");
    } else {
      setError("Fill in all fields");
    }
  };

  return (
    <>
      <div className="px-20 pt-40 pb-10">
        <div className="d-flex justify-content-between">
          <HeadingLarge uppercase="true">Edit Post</HeadingLarge>
        </div>
        <div className="py-10">
          <label htmlFor="nameInput">Title</label>
          <div className="row">
            <div className="grid grid-cols-2">
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
                type="text"
                placeholder="Title"
                id="titleInput"
                onChange={handleTitle}
                value={title}
              />
            </div>
          </div>
          <label htmlFor="bodyInput">Body</label>
          <div className="row">
            <div className="grid grid-cols-2">
              <textarea
                className="p-3 mb-4 border-gray-100 rounded-lg  dark:bg-gray-100 dark:border-gray-400"
                type="body"
                placeholder="Body"
                id="bodyInput"
                onChange={handleBody}
                value={body}
                rows="6"
                cols="64"
              />
            </div>
          </div>

          {error && error}
          <Button width="fit-content" onClick={handleClick}>
            Save post
          </Button>
        </div>
      </div>
    </>
  );
}
