import styled from "styled-components";
import { FiPlus} from 'react-icons/fi';


export const FormStyle = styled.form`
    padding: 0 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
`

export const ContainerStyle = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 5px;

    @media (max-width: 620px){
      width: 100%;
    }
`

export const InputContainerStyle = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
`;

export const InputStyle = styled.input`
    border-radius: 5px;
    width: 100%;
    height: 38px;
    border: solid 1.5px #d3d3d3;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    text-indent: 10px;
    &:focus {
      outline-width: 0px;
    }
`;

export const SelectContainerStyle = styled.div`
    width: 100%;
    .css-1s2u09g-control{
      box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    }

    .css-qc6sy-singleValue{
      color: hsl(0deg 0% 54%);
    }
`

export const LabelStyle = styled.label`
    width: 100%;
    color: ${(props) => props.theme.color_text_primary};
    line-height: 32px; 
    font-weight: 700;
    font-size: 15px;
`;

export const DescriptionBlockStyle = styled.div`
    width: 100%;
    margin-top: 30px;
`

export const DescriptionStyle = styled.textarea`
  font-family:'Quicksand','Roboto', sans-serif;  
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  height: 120px;
  border: solid 1.5px #d3d3d3;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  text-indent: 5px;
  font-size: 16px;
  resize: none;
  &:focus {
    outline-width: 0px;
  }
`
export const LatLonStyle = styled.div`
width: 100%;
`

export const AtributesContainerStyle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
`;


export const AtributesBlockStyle = styled.div`
  background:  rgba(190, 190, 190, 0.2);
  border-radius: 5px;
  height: 100%;
  max-height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  padding: 10px 20px 20px 20px;
  gap: 20px;
  
`;

export const AtributeInputBlock = styled.div`
  width: 800px;
  max-width: 100%;
`

export const AtributeNameField = styled.input`
  border-radius: 5px;
  /* width: 850px; */
  width: 100%;
  height: 40px;
  border: solid 1.5px #d3d3d3;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  text-indent: 5px;
  &:focus {
    outline-width: 0px;
  } 
`

export const AtributeIconField = styled.input`
  border-radius: 5px;
  /* width: 650px; */
  width: 100%;
  height: 40px;
  border: solid 1.5px #d3d3d3;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  text-indent: 5px;
  resize: none;
  &:focus {
    outline-width: 0px;
  }
`

export const PolicyContainerStyle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  margin-top: 40px; 
`

export const PolicyBodyStyle = styled.div`
  width: 100%;
  border: solid 1.5px #d3d3d3;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px){
    flex-direction: column;
    
  }
`

export const PolicyBlockStyle = styled.div`
  width: 100%;
  padding: 2rem;
  
`

export const PolicyName = styled.h5`
  font-size: 18px;
  padding-bottom: 10px;
`

export const PolicyField = styled.textarea`
  font-family:'Quicksand','Roboto', sans-serif;  
  border-radius: 5px;
  width: 100%;
  height: 200px;
  border: solid 1.5px #d3d3d3;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  text-indent: 5px;
  padding: 10px ;
  font-size: 15px;
  resize: none;
  &:focus {
    outline-width: 0px;
  }

  @media (max-width: 768px){
    max-height: 120px;
    
  }
`

export const ImageContainerStyle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
`

export const TitleStyle = styled.h3`
  margin-bottom: 10px;
`

export const ImageBlockStyle = styled.div`
  background:  rgba(190, 190, 190, 0.2);
  border-radius: 5px;
  height: 100px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 2rem;
  margin-bottom: 30px;
  gap: 20px;
  
`
export const ButtonStyle =styled.button`
  height: 38px;
  border-radius: 4px;
  border: none;
  background: ${props => props.theme.primary};
  cursor: pointer;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
   &:hover {
    background-color: #00f1ec;
    color: #fff;
   }
   padding: 0 2px ;
`
export const IconButtonStyle = styled(FiPlus)`
color: #fff;
font-size: 30px;

`

export const ContainerButtonGlobal = styled.div`
padding-bottom: 40px; 

`
export const ErrorText = styled.p`
 color: red;
  width: 100%;
  padding: 5px;

`




