import styled from 'styled-components';

export const ContainerFooter = styled.div`
background:${props => props.theme.primary};
opacity: .9;
width: 100vw;
height: 60px;
display: flex;
align-items: center;
justify-content: space-between;
padding:20px;
/* position: fixed; */
bottom:0;
z-index:2;

@media (min-width:769px){
  width:100%;
}

`
export const FooterBlock = styled.div`
  display: flex;
  align-items: center;
  color: #FFFFFF;
  padding:18px 0 18px 10px;


`
export const FooterText = styled.p`
  font-weight: 600;
  font-size: 16px;
  @media (min-width: 415px) and (max-width: 768px){
    font-size:15px;
  }

  @media (max-width: 414px) {
    font-size: 15px;
  }

`;


export const FooterIcon = styled.div`
  padding-right:10px;
  font-size: 18px;
  align-items: center;
  line-height: 0;
  cursor: pointer;
  
  @media (max-width: 414px) {
    display: none;
  }

  @media (max-width: 600px) {
    display: none;
  }


`

