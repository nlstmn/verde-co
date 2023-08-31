import styled from 'styled-components'

export const ButtonStyled = styled.button`
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.hbPrimary};
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  border-radius: 6px;
  height: 54px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  &:hover {
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.hbPrimaryHover};
  }
  ${(props) => props.theme.mediaQueries.md} {
    height: 38px;
    width: ${(props) => (props.width ? props.width : '100%')};
  }
`

export const ButtonOutlineStyled = styled.button`
  color: ${(props) => props.theme.colors.hbTextGrey};
  background: ${(props) =>
    props.background ? props.background : 'transparent'};
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.hbBorder};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  border-radius: 6px;
  height: 54px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  &:hover {
    border-color: ${(props) => props.theme.colors.hbPrimary};
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.hbTextGrey};
    svg {
      font-size: 20px;
    }
  }
  ${(props) => props.theme.mediaQueries.md} {
    height: 38px;
    width: ${(props) => (props.width ? props.width : '100%')};
  }
`
