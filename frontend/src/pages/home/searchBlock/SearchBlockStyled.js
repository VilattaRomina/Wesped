import styled from 'styled-components';

//General
export const ContainerSearchBlock = styled.div`
  background: #0073A3;
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

  @media all and(max-width:414px){
    flex-flow: wrap;
    justify-content:center;
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
