import styled from "styled-components";
import { Link } from "react-router-dom";

export const BodyStyle = styled.body`
padding-top:81px;
`

export const HeaderStyle = styled.div`
  height:70px;
  background-color:#0073A3;
  color: #fff;
  padding: 15px 35px 10px 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
 
  div{
    display: flex;
    justify-content:space-between;
    max-width: 1300px;
    
    
  }
 
`

export const Title = styled.div`
  display:flex;
  flex-direction:column;
  
    h5{
        font-size: 14px;  
        font-weight:300;
    }

    h4{
        font-size: 20px;
        line-height: 28px;
    }
  
`;

export const Arrow = styled.div`
font-size: 25px;
align-items: center;
`

export const LinkStyle = styled(Link)`
color:#fff;
cursor:pointer;
`;



export const UbicationStyle = styled.div`
height:55px;
background: #FDF6EC;
padding: 20px 0 10px 30px;

div{
  display:flex;
  max-width: 1300px;
margin: 0 auto;
}

p{
    color: black;
    font-size: 14px; 
    font-weight: 500; 
    padding-left:5px;
}
`;


export const BlockIconStyle = styled.div`
height:50px;
padding: 20px 0 20px 30px;
font-size:19px;

`
export const ContentIcon = styled.div`
display:flex;
max-width: 1300px;
margin: 0 auto;

div{
  margin-right:10px;
}
`



