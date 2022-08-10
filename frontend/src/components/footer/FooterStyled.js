import styled from 'styled-components';

export const ContainerFooter = styled.div`
background: #1DBEB4;
width: 100vw;
height: 60px;
display: flex;
align-items: center;
justify-content: space-between;
padding:20px;
position: fixed;
bottom:0;

@media (min-width: 415px) and (max-width: 768px){
  min-width:648px;
}

@media (min-width:769px){
  width:100%;
}

`
export const FooterBlock = styled.div`
  display: flex;
  align-items: center;
  color: #FFFFFF;
  padding:21px 0 21px 30px;

  @media (min-width: 415px) and (max-width: 768px){
    padding:20px 0 20px 20px;
    
  }
  @media (max-width: 414px) {
    padding:18px 0 18px 25px;
  }


`
export const FooterText = styled.p`
  font-weight: 700;
  font-size: 16px;

  @media (min-width: 415px) and (max-width: 768px){
    padding:20px 0 20px 20px;
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

  @media (max-width: 414px) {
    display: none;
  }

  @media (min-width:769px){
    width:100%;
  }

`

