import styled from "styled-components";

export const TopNavStyled = styled.div`
  display: flex;
  flex-direction: column;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  background: ${(props) => props.theme.colors.white};
  .team-info {
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 32px 12px 32px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    border-bottom: 1px solid #e5e7eb;
    .team-avatars {
      display: flex;
      .avatar {
        img,
        .identifier {
          border: 2px solid ${(props) => props.theme.colors.white};
        }
      }
      .avatar:not(:first-child) {
        margin-left: -8px;
      }
      .view-team {
        font-weight: 400;
        padding-left: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${(props) => props.theme.colors.hbTextBlue};
        &:hover {
          text-decoration: none;
        }
      }
    }
    .my-account {
      display: flex;
      align-items: center;
      .notification-icon {
        font-size: 20px;
      }
      .profile {
        display: flex;
        margin-left: 32px;
        margin-right: 24px;
        min-width: 130px;
        .avatar {
          height: 36px;
          width: 36px;
          margin-right: 12px;
        }
        .name {
          font-weight: 500;
          font-size: 14px;
          color: ${(props) => props.theme.colors.hbTextBlue};
        }
        a {
          font-size: 12px;
          color: ${(props) => props.theme.colors.hbTextGreyLight};
        }
      }
      .btn {
        height: 38px;
        svg {
          margin-left: 10px;
          font-size: 20px;
        }
      }
    }
  }
`;
