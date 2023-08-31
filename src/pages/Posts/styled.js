const { default: styled } = require('styled-components')

export const AccountDetailsStyled = styled.div`
  .inner-content {
    padding-top: 150px;
    padding-bottom: 50px;
    min-height: 100vh;
    padding-right: 34px;
  }
  input {
    background: white;
    border: 1px solid ${(props) => props.theme.colors.hbBorder};
    border-radius: 6px;
    padding: 1rem;
    margin-bottom:20px;
    width: ${(props) => (props.width ? props.width : '100%')};
    height: ${(props) => props.height && props.height};
    color: ${(props) => props.theme.colors.hbTextBlue};
    transition: ${(props) => props.theme.transitions.default};
    font-size: ${(props) => props.theme.fontSizes.md};
    -webkit-appearance: none;
    ::-webkit-input-placeholder {
      color: ${(props) => props.theme.colors.hbTextBlue};
      opacity: 0.5;
    }
  
    :disabled {
      background: #f9f9f9;
      border-color: #f9f9f9;
    }
  
    &:focus,
    &:hover {
      outline: none;
      border-color: ${(props) => props.theme.colors.hbPrimary};
      background: #fff;
    }
  }
  .form {
    padding:100px;
  }
`

export const TeamStyled = styled.div`
  .inner-content {
    padding-top: 150px;
    padding-bottom: 50px;
    min-height: 100vh;
    padding-right: 34px;

    .card {
      margin-top: 24px;
      border-radius: 8px;
      border: 0;
      box-shadow: 0px 1px 2px 0px #0000000f;
      box-shadow: 0px 1px 3px 0px #0000001a;
      overflow: hidden;
      .card-header {
        border-bottom: 1px solid
          ${(props) => props.theme.colors.hbDashboardBackground};
        background: ${(props) => props.theme.colors.white};
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 24px;
        h4 {
          font-size: 18px;
          margin-bottom: 5px;
          color: ${(props) => props.theme.colors.hbTextBlue};
        }
        span {
          font-size: 14px;
          color: ${(props) => props.theme.colors.hbTextGreyLight};
        }
      }
      .card-body {
        padding: 24px;
        padding-bottom: 0;
        .table-head{
          padding: 20px 24px;
        }
        .team-card {
          font-size: 14px;
          margin-bottom: 24px;
          border-radius: 8px;
          box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.06);
          .tc-body {
            padding: 32px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .avatar {
              height: 128px;
              width: 128px;
              margin-bottom: 24px;
              svg {
                padding-top: 30px;
              }
            }
            .name {
              margin-bottom: 8px;
              font-weight: 500;
              color: ${(props) => props.theme.colors.hbTextBlue};
            }
            .role {
              margin-bottom: 10px;
              color: ${(props) => props.theme.colors.hbTextGreyLight};
            }
            .type {
              line-height: 16px;
              font-weight: 500;
              font-size: 12px;
              border-radius: 50px;
              padding: 4px 8px;
              background: ${(props) => props.theme.colors.hbFooterBorder};
              color: ${(props) => props.theme.colors.hbTextGreyLight};
              &.primary {
                color: ${(props) => props.theme.colors.hbSuccessText};
                background: ${(props) => props.theme.colors.hbSuccessBg};
              }
              &.secondary {
                background: ${(props) => props.theme.colors.hbGreyBackground};
                color: ${(props) => props.theme.colors.hbPrimaryHover};
              }
            }
          }
          .tc-footer {
            display: flex;
            justify-content: center;
            align-items: center;
            border-top: 1px solid
              ${(props) => props.theme.colors.hbFooterBorder};
            color: ${(props) => props.theme.colors.hbTextGrey};
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            a {
              padding: 16px;
              display: flex;
              flex: 1;
              justify-content: center;
              color: ${(props) => props.theme.colors.hbTextGrey};
              &:hover {
                text-decoration: none;
              }
            }
            .icon {
              display: flex;
              justify-content: cneter;
              align-items: center;
              height: 16px;
              width: 16px;
              margin-right: 10px;
              color: ${(props) => props.theme.colors.hbIconGrey};

              svg {
                width: 100%;
                height: 100%;
                path {
                  fill: ${(props) => props.theme.colors.hbIconGrey};
                }
              }
            }
          }
        }
      }
    }
  }
`
