import styled from "styled-components";

export const ItemCategoriesStyles = styled.div`
    display: flex;
    flex-direction: column;
    

    @media (max-width: 414px) {
   
    }
  
    @media (min-width: 414px) and (max-width: 768px) {
        
    }
  
    @media (min-width: 768px) {
      
    }
`

export const ImageCategoryStyles = styled.img`
    min-width: 100%;
    max-width: 100%;
`;

export const InfoCategoryStyle = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    width:100%;
    
    
`;

 export const TitleCategoryStyle = styled.h3`
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #383B58;
    padding:7px 15px 0 13px;
 `;

export const DescriptionCategoryStyle = styled.p`
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #383B58;
    opacity: 0.6;
    padding:7px 15px 8px 13px;
`;
