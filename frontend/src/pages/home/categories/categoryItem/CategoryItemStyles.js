import styled from "styled-components";

export const CardStyle = styled.div`
@media (min-width: 415px) and (max-width: 768px) {
    width: calc(50% - 7px)
}
`

// export const ItemCategoriesStyles = styled.div`
//     display: flex;
//     flex-direction: column;
// `

export const ImageCategoryStyles = styled.img`
    min-width: 100%;
    max-width: 100%;
`;

export const InfoCategoryStyle = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    padding:10px;
    

    @media(max-width: 114px){
        padding: 14px;
    }
    
`;

 export const TitleCategoryStyle = styled.h3`
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #383B58;
    

    @media (min-width: 415px) and (max-width: 768px) {
        
    }
 `;

export const DescriptionCategoryStyle = styled.p`
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #383B58;
    opacity: 0.6;
    
`;
