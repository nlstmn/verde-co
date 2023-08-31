/* eslint-disable jsx-a11y/anchor-is-valid */
import { useSelector } from "react-redux";
import { HeadingLarge } from "styles/general-styles";
import { useNavigate } from "react-router-dom";

export function PostList() {
  const navigate = useNavigate();
  const { posts } = useSelector((state) => state.posts);
  const userPosts = posts?.filter((post) => post.userId === 1);
  return (
    <>
      <div className="px-20 pt-40 pb-10">
        <div className="d-flex justify-content-between mb-6">
          <HeadingLarge uppercase="true">Posts List</HeadingLarge>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {userPosts.map(({ id, title, body }, i) => (
            <div
              key={i}
              className="p-6 bg-white border border-gray-200 rounded-lg shadow light:border-gray-700"
            >
              <a
                onClick={() => navigate(`/view-post/${id}`)}
                className="cursor-pointer"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
