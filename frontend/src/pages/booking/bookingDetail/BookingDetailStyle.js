import styled from "styled-components";

export const CardStyle = styled.div`
border-radius:10px;
background-color: ${props => props.theme.background};
box-shadow: 0px 10px 6px 5px rgba(0,0,0,0.1);

`
export const ContainerStyle= styled.div`
padding:25px 10px;
margin:10px;
display: flex;
gap:10px;
flex-direction: column;


// @media (max-width: 768px){
//   display:grid;
//   grid-template-columns: 1fr 1fr;
// }

@media (max-width: 1050px){
  display:grid;
  grid-template-columns: 1fr 1fr;
}

// @media (max-width: 414px){
//   display: flex;
//   flex-direction: column;

// }

@media (max-width:615px){
  display: flex;
  flex-direction:column;
}
`
export const Title = styled.h2`
    color: ${(props) => props.theme.text_primary};
    font-weight: 700;
    padding-bottom:18px;
`
export const ContainerImage = styled.div`
height:300px;
@media (max-width: 768px){
padding-right:10px;
}
`
export const Image = styled.img`
width:100%;
height:100%;
border-radius:10px;
object-fit: cover;

@media (max-width: 768px){
  height:100%;
  }
`

export const InfoDetailProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top:20px;
 
  h3{
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
    color:#383B58;
    opacity: 0.5;
  }

  h2{
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #383B58;
    padding-bottom: 20px;
  }

  p{
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color:#383B58;
    padding-bottom: 40px;
  }

  span{
    padding-right:5px;
  }
`
export const ContainerDate = styled.div`
display:flex;
justify-content:space-between;
padding: 20px 0;
color:#383B58;


`

export const ContainerButton = styled.div`
display: flex;
justify-content: center;
padding-top:40px;

`



