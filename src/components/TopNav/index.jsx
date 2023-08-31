import PropTypes from "prop-types";
import { Avatar } from "components/Avatar";
import { TopNavStyled } from "./styled";

const av1 = require("@img/avatars/av-1.jpeg");
const av2 = require("@img/avatars/av-2.jpeg");
const av3 = require("@img/avatars/av-3.jpeg");

export const TopNav = ({ title, postCount }) => {
  const images = [
    {
      url: av3,
      label: "AV",
    },
    {
      url: av2,
      label: "AV",
    },
    {
      label: "AV",
    },
    {
      url: av1,
      label: "AV",
    },
  ];
  return (
    <TopNavStyled>
      <div className="team-info">
        <div className="team-avatars"></div>
        <div className="my-account">
          <div className="relative inline-flex items-center p-2 text-sm font-medium text-center">
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
              {postCount}
            </div>
            Posts
          </div>

          <div className="profile">
            <Avatar className="avatar" image={images[3]} />
            <div className="d-flex flex-column">
              <span className="name">Tom Cook</span>
            </div>
          </div>
        </div>
      </div>
    </TopNavStyled>
  );
};

TopNav.propTypes = {
  title: PropTypes.string,
};
