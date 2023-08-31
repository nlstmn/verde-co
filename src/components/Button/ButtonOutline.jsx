import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { ButtonOutlineStyled } from './styled'

export function ButtonOutline(props) {
  const navigate = useNavigate()
  const { children, onClick, url } = props
  const handleOnClick = () => {
    if (onClick) {
      onClick()
    }
    if (url) {
      navigate(url)
    }
  }

  return (
    <ButtonOutlineStyled className="btn" onClick={handleOnClick} {...props}>
      {children}
    </ButtonOutlineStyled>
  )
}

ButtonOutline.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  url: PropTypes.string,
}
