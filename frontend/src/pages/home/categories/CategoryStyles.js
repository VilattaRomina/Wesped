import styled from "styled-components";

export const CategoryContainerStyle = styled.div`
  min-width: calc(320px - 4rem);
  max-width: 1366px;
  margin: 0 auto;
  background: #F3F1ED;
  padding: 1rem 2rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

`
export const TitleStyle = styled.h2`
font-weight: 700;
font-size: 24px;
line-height: 28px;
color: #383B58;
margin-bottom: 5px;

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








  
  

 

 


