import styled from "styled-components/macro";

export const HeadingLarge = styled.h1`
  font-family: Cervo Neue Bold;
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.hbTextBlue};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};
  ${(props) => props.theme.mediaQueries.md} {
    font-size: ${(props) => props.theme.fontSizes.xxl};
  }
`;

export const HeadingSemiLarge = styled.h1`
  font-family: Cervo Neue Bold;
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.hbTextBlue};
  font-weight: ${(props) => props.theme.fontWeights.heavy};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};
`;

export const HeadingMedium = styled.h2`
  font-family: Cervo Neue Bold;
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.colors.hbTextBlue};
  font-weight: ${(props) => props.theme.fontWeights.semiNormal};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};
  display: ${(props) => (props.display ? props.display : "block")};
  border: ${(props) => (props.borderBlack ? "1px solid black" : "")};
`;

export const HeadingSmall = styled.h3`
  font-family: Cervo Neue Bold;
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.grayDark};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)};
`;

export const SubHeading = styled.span`
  background-color: #d7f2fd;
  display: inline-block;
  padding: 3px 5px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const LabelXSmall = styled.label`
  display: block;
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes.sm};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};

  .link {
    color: ${(props) => props.theme.colors.blue};
    cursor: pointer;
    margin-left: 5px;
  }
`;

export const LabelSmall = styled.label`
  display: block;
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes.md};

  .link {
    color: ${(props) => props.theme.colors.teal};
  }
`;

export const NotificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  text-align: ${(props) => (props.alignleft ? props.alignleft : "center")};
  align-items: ${(props) => (props.alignleft ? "flex-start" : "center")};

  img {
    width: 76px;
    height: 76px;
  }
`;

export const ContentWrapper = styled.div`
  width: 800px;
  margin: 50px auto 0px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const FlexFormWrapper = styled.div`
  width: ${(props) => (props.width ? props.width : "50%")};
  display: flex;
  align-items: center;
  position: relative;
  margin-left: ${(props) => (props.marginleft ? props.marginleft : 0)};
`;

export const BasicContainer = styled.div`
  width: ${(props) => (props.width ? props.width : "70%")};
  margin: 0 auto;
  margin-top: ${(props) => (props.margintop ? props.margintop : 0)};
`;

export const UnderlinedLabel = styled.label`
  font-size: ${(props) => props.theme.fontSizes.md_2};
  color: ${(props) => props.theme.colors.grayDarker};
  text-decoration: underline;
  cursor: pointer;
`;
