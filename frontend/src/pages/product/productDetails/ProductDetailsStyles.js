import styled from "styled-components";
import { Link } from "react-router-dom";

export const BodyStyle = styled.section`
  padding-top:81px;
`
export const HeaderStyle = styled.div`
  height:70px;
  background-color:${props => props.theme.secondary};
  color: #fff;
  padding: 15px 30px 10px 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display:flex;
  justify-content: space-between;
  align-items: center;
 
`

export const Title = styled.div`
    display:flex;
    flex-direction:column;

      h4{
          font-size: 15px;  
          font-weight:300;
      }

      h2{
          font-size: 24px;
          line-height: 28px;
      }
`;

export const Arrow = styled.div`
  font-size: 30px;
`
export const LinkStyle = styled(Link)`
  color: #fff;
  cursor:pointer;
`

export const UbicationStyle = styled.div`
  height:55px;
  background: ${props => props.theme.content_background};;
  padding: 20px 0 10px 30px;
  display:flex;
  font-size: 18px; 
  h4{
      color: black;
      font-size: 15px; 
      font-weight: 500; 
      padding-left:10px;
  }

`;

export const ShareStyle = styled.div`
  height:50px;
  padding: 20px 0 10px 30px;
  display:flex;
  font-size:18px;
  div{
    padding-right:10px;
  }
`;

export const DescriptionStyle = styled.section`
  padding: 30px 30px 30px 30px;
  display:flex;
  flex-direction: column;
  h4{
    font-size:24px;
    padding-bottom:20px;
  }
  p{
    color: ${props => props.theme.text_secondary}
  }

  @media (max-width: 768px){
    padding: 0 30px 10px 30px;
  }
`;

export const FeaturesStyle = styled.section`
  padding: 40px 30px 30px 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap:20px;

  @media (max-width: 768px){
    grid-template-columns: 1fr 1fr ;
  }
`

export const PoliciesStyle = styled.section`
  padding: 40px 30px 80px 30px;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap:20px;
  p{
    color: ${props => props.theme.text_secondary}
  }

  @media (max-width: 768px){
    grid-template-columns: 1fr 1fr ;
  }
`


export const LineStyles = styled.hr`
  border-color:${props => props.theme.primary};
`
export const TitleStyles = styled.h4`
  padding: 20px 0 12px 30px;
  font-size:24px;

  
`
