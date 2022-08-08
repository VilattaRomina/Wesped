import styled from 'styled-components';

export const ContainerFooter = styled.div`
background: #1DBEB4;
width: 100vw;
height: 58px;
display: flex;
align-items: center;
justify-content: space-between;
padding:20px;
position: fixed;
bottom:0;
`
export const FooterBlock = styled.div`
  display: flex;
  align-items: center;
  color: #FFFFFF;
  padding:19px 50px 23px 50px;

  @media (max-width: 414px) {
    padding:19px 0 23px 19px;
  }


`
export const FooterText = styled.p`
  font-weight: 700;

  @media (max-width: 414px) {
    font-size: 14px;
  }
`;


export const FooterIcon = styled.div`
  padding-right:10px;
  font-size: 24px;
  align-items: center;
  line-height: 0;

  @media (max-width: 414px) {
    font-size: 16px;
    display: none;
  }

`

