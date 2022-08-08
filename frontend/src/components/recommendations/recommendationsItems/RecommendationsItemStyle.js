import styled from "styled-components";

export const ItemRecommendationStyle = styled.div`
display:flex;
flex-flow: row nowrap;
min-height: 283px;
width:635px;

@media (max-width: 414px){
    flex-direction: column;   
    width:100%;
}
`

export const ImageRecommendationStyle = styled.img`
width:311px;
height:100%;


@media (max-width: 414px) {
  width: 100%;
  height: 100%;
}
`;

export const InfoRecommendationsStyle = styled.div`
padding: 1rem;
display: flex;
flex-direction: column;
justify-content: space-between;
gap:10px;

`;
export const CategoryStyle = styled.h3`
  font-family: "Quicksand";
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  opacity: 0.5;
  text-transform: uppercase;
`;

export const TitleStyle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
`;
export const LocationTextStyle = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

`
export const DescriptionStyle = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  
`

export const ButtonStyle = styled.button`
background: #1DBEB4;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
border-radius: 5px;
color: white;
height: 40px;
`;