import styled from "styled-components";

export const CategoryContainerStyle = styled.div`
  min-width: calc(320px - 4rem);
  max-width: 1366px;
  margin: 0 auto;
  background: #F3F1ED;
  padding: 240px 32px 16px 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width:795px) {
    padding-top: 280px;
  }
  
  @media (max-width:768px) {
    padding-top: 20px;
  }

  

`
export const TitleStyle = styled.h2`
font-weight: 700;
font-size: 24px;
line-height: 28px;
color: #383B58;
margin-bottom: 10px;

@media (max-width: 414px) {
  font-size:21px
}
`

export const CategoryListContainerStyle = styled.div`
    display: flex;
    gap: 14px;
    flex-flow: row nowrap;

    @media (max-width: 414px) {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    @media (min-width: 415px) and (max-width: 768px) {
      flex-flow: row wrap;
      align-items: stretch;
    }

   
    
`
export const CardStyle = styled.div`
@media (min-width: 415px) and (max-width: 768px) {
    width: calc(50% - 7px)
}
`








  
  

 

 


