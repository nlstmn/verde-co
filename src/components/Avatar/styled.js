import styled from 'styled-components'

export const AvatarStyled = styled.div`
  height: 44px;
  width: 44px;
  position: relative;
  img,
  .identifier,
  svg {
    border-radius: 50%;
    height: 100%;
    width: 100%;
  }

  .identifier {
    display: flex;
    justify-content: center;
    align-items: center;
    // TODO: make the colors dynamic
    background: #fee7b8;
    color: #ad6a38;
    font-weight: 600;
    text-transform: uppercase;
  }
  svg {
    background: ${(props) => props.theme.colors.hbDashboardBackground};
    font-size: 48px;
    padding-top: 10px;
  }
  &.active {
    &::after {
      content: ' ';
      position: absolute;
      border-radius: 50px;
      border: 2px solid ${(props) => props.theme.colors.white};
      top: 1px;
      right: 1px;
      height: 12px;
      width: 12px;
      background: ${(props) => props.theme.colors.hbSuccess};
    }
  }
  &:hover {
    cursor: pointer;
  }
`
