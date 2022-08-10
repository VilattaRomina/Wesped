//inputs
import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  width: 420px;
  height: 40px;
  background: #FFFFFF;
  color: #DFE4EA;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;


  @media all and (max-width:768px){
    width:45%
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