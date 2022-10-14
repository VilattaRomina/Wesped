import styled from "styled-components";

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #f5f5f5;
height: 90vh;
font-family: 'Roboto';
gap: 1rem;
h1{
    color: #1dbeb4;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
}
button{
    margin-top: 2.5rem;
}

@media only screen and (max-width: 414px) {
    width: 100%;
    
    input, button{
        width: 80vw;
    }
  }

@media only screen and (min-device-width: 415px) and (max-device-width: 767px) {
    width: 100%;
    
    input, button{
          width: 70vw;
      }
    }

}
  `

export const Div = styled.div`
display: flex;
flex-direction: column;
align-items: ${props => props.align};
gap: 10px;

span{
    color: #383B58;
    margin-top: .5rem;
    font-family: 'Roboto';
    font-size: .75rem;
    a{
        text-decoration: none;
        color: blue;
    }
}
`

export const Label = styled.label`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 1rem;
line-height: 14px;
color: #383B58;
`
