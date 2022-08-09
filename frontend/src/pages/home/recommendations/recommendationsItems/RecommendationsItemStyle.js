import styled from "styled-components";

export const ItemRecommendationStyle = styled.div`
display:flex;
flex-flow: row nowrap;
min-height: 283px;

@media (max-width: 414px){
    flex-direction: column;   
    width:100%;
}
@media (min-width: 414px) and (max-width: 768px){
  min-height: 279px;
}

@media (min-width:768px){
 
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

@media (min-width: 414px) and (max-width: 768px){

}

@media (min-width:768px){
  
}

`;

export const InfoRecommendationsStyle = styled.div`
padding: 22px;
display: flex;
flex-direction: column;
justify-content: space-between;
align




`;
export const CategoryStyle = styled.h3`
  font-family: "Quicksand";
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
  color:#383B58
  
`

export const ButtonStyle = styled.button`
background: #1DBEB4;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
border-radius: 5px;
color: white;
height: 40px;

`;