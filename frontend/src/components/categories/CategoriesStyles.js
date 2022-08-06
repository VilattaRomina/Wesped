import styled from "styled-components";

export const CategorieStyle = styled.div`
  background: #F3F1ED;
  padding: 1rem 2rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2{
    font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 25px;
  margin-bottom: 10px;
  }

  div{
    display: flex;
    gap: 20px;
    flex-flow: wrap;
  }
  
`;


export const CategoryCard = styled.div`
 
  background: #ffffff;
  border: 1px solid #f3f1ed;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  flex: 1;

  img{
    min-width: 100%;
    max-width: 100%;
    border-radius: 10px 10px 0px 0px;
  }

  div{
    padding: 10px;
    display: flex;
    flex-direction: column;
    width:100%
  }

  h3{
    font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  margin:0;
  }

  p{
    font-weight: 700;
    font-size: 14px;
    margin:0;
  } 
`;





  
  

 

 


