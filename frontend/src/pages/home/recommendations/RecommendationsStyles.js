import styled from "styled-components"

export const RecommendationContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 1366px;
  padding: 1rem 2rem 1rem 2rem;

  @media (max-width: 414px) {
    background-color:#545776;
    
  }

`
export const RecomendationTitle = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 25px;
  margin-bottom: 10px;
  color: #383B58;

  @media (max-width: 414px) {
    color:#ffffff;
  }
`
export const ListRecommendationsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 414px) {
    display: flex;
    flex-direction: column;

  }



`








  

