import styled from 'styled-components';

//General
export const ContainerSearchBlock = styled.div`
  background: #191B1D;
  padding: 0.1em;
`;
//title
export const SearchBlockTitle = styled.h1`

  color: #fff;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 780;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  padding: 0.5em;

`;

//Bar 
export const SearchBar = styled.div`

  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 0 20px 20px 20px;

  @media all and(max-width:800px){
    flex-direction:column;
    align-items:center;
  }
`;

//inputs
export const InputContainer = styled.div`
  position: relative;
  width: 420px;
  height: 40px;
  background: #FFFFFF;
  color: #DFE4EA;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;


  @media all and (max-width:700px){
    width:100%;
  }
`;


export const Input = styled.div`
  width: 448px;
  height: 40px;
  border: none;

  @media all and (max-width:700px){
    width:100%;
    margin-left:10px;
  }
`;

//Icons
export const Icon = styled.div`
  display: flex;
  margin-left: 1em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//Button 

export const Button = styled.button`
width:206px;
height: 40px;
color:#FFF;
border-radius: 5px;
padding: 10px;

background-color:#1DBEB4;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 16px;

@media all and (max-width:700px){
  width:100%;
}
`;
