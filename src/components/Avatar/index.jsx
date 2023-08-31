import { ProfileIcon } from "@img/svg";
import PropTypes from "prop-types";
import { AvatarStyled } from "./styled";

export const Avatar = ({ className, image }) => {
  const renderAvatar = () => {
    if (image) {
      if (image.url) {
        return <img src={image.url} alt="avatar" />;
      }
      return <span className="identifier">{image.label}</span>;
    }
    return <ProfileIcon />;
  };
  return <AvatarStyled className={className}>{renderAvatar()}</AvatarStyled>;
};

Avatar.propTypes = {
  className: PropTypes.any,
  image: PropTypes.shape({
    label: PropTypes.any,
    url: PropTypes.any,
  }),
};
