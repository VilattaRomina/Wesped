import styled from "styled-components";

const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #f5f5f5;
height: 90vh;
font-family: 'Roboto';
gap: 3rem;
h1{
    color: #1dbeb4;
}

@media only screen and (max-width: 414px) {
    width: 100%;
    
    input, button{
        width: 80vw;
    }
  }
`

export const StyledDiv = styled.div`
display: flex;
flex-direction: column;
align-items: ${props => props.alignItems};
gap: 10px;

span{
    color: #383B58;
    margin-top: .5rem;
    font-size: .75rem;
    a{
        text-decoration: none;
        color: blue;
    }
}
`

export default Form;