import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "components/Button";
import { HeadingLarge } from "styles/general-styles";
import { postAdded } from "features/post/postsSlice";

export function AddPost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleBody = (e) => setBody(e.target.value);

  const totalPosts = useSelector(
    (state) => state.posts.posts.filter((post) => post.userId === 1).length
  );

  const handleClick = () => {
    if (title && body) {
      fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          body,
          userId: 1,
        }),
      })
        .then((response) => {
          dispatch(
            postAdded({
              id: totalPosts + 1,
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

    setTitle("");
    setBody("");
  };

  return (
    <>
      <div className="px-20 pt-40 pb-10">
        <div className="d-flex justify-content-between">
          <HeadingLarge uppercase="true">Add Post</HeadingLarge>
        </div>
        <div className="card-body">
          <label htmlFor="titleInput">Title</label>
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
            Add post
          </Button>
        </div>
      </div>
    </>
  );
}
