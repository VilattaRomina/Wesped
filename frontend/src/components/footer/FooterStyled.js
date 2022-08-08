import styled from 'styled-components';

export const ContainerFooter = styled.div`
background: #1DBEB4;
width: 100vw;
display: flex;
align-items: center;
justify-content: space-between;
padding:20px;
position: fixed;
bottom:0;
`
export const FooterBlock = styled.div`
padding: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #FFFFFF;


`
export const FooterText = styled.p`
  font-weight: 700;
  

  @media (max-width: 414px) {
    font-size: 10px;
  }
`;


export const FooterIcon = styled.div`

padding: 10px;
  font-size: 24px;
  align-items: center;
  line-height: 0;

  @media (max-width: 414px) {
    font-size: 16px;
  }

  @media (max-width: 414px) {
    display: none;
  }

`

