import styled from 'styled-components';

//General
export const ContainerSearchBlock = styled.div`
  background: #0073A3;
  padding: 0.1em;
  z-index:10;
  position:fixed;
  top:80px;
  width: 100%;

  @media (max-width: 768px) {
    position: static;
    padding-top: 80px;
  }
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

  @media (max-width: 800px){
    font-size: 30px;
  }

`;

//Bar 
export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 0px 20px 20px 20px;
  

  @media(max-width: 760px){
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const ButtonStyle = styled.div`
padding:10px;
max-width: 206px;
min-width: 166px;


@media (max-width: 414px) {
  max-width: 100%;
  min-width: 100%;
}
`

//Icons
export const Icon = styled.div`
  display: flex;
  margin-left: 1em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
