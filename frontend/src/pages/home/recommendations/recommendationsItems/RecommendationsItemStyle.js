import styled from "styled-components";


export const ItemRecommendationStyle = styled.div`
display:flex;
flex-flow: row nowrap;
height: 100%;

@media (max-width: 414px){
    flex-direction: column;   
}

@media (min-width: 415px) and (max-width: 768px) {
  width: 100%;
  justify-content: space-between;
}
`

export const ImageWrapperStyle = styled.div`
@media (min-width: 415px) and (max-width: 768px) {
  width: calc(50% - 10px);
  flex: 1;
}
`

export const ImageRecommendationStyle = styled.img`
width:311px;
height:100%;
border-radius:8px 8px 0 0;

@media (max-width: 414px) {
  width: 100%;
  height: 100%;
}

@media (min-width: 415px) and (max-width: 768px) {
  object-fit: cover;
  width: 100%;
}

`;

export const InfoRecommendationsStyle = styled.div`
padding: 22px;
display: flex;
flex-direction: column;
justify-content: space-between;
flex: 1;
`;

export const CategoryStyle = styled.h3`
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  opacity: 0.5;
  text-transform: uppercase;
  color:#383B58
`;

export const TitleStyle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  padding-bottom: 19px;
  color: #383B58;
`;
export const LocationTextStyle = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  padding-bottom: 19px;
  color:#383B58

`
export const DescriptionStyle = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  padding-bottom: 19px;
  color:#383B58;
  
`

export const ButtonStyle = styled.button`
background-color: ${props => props.theme.primary};
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
border-radius: 5px;
color: white;
height: 40px;
border:0;

`;