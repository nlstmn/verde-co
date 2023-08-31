import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const Button = (props) => {
  const navigate = useNavigate();
  const { children, onClick, url } = props;
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
    if (url) {
      navigate(url);
    }
  };

  return (
    <button
      className="bg-blue-700 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded inline-flex items-center"
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.string,
  onClick: PropTypes.func,
  url: PropTypes.string,
};
