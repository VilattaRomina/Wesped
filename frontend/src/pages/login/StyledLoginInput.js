import styled from "styled-components";

export const StyledLabel = styled.label`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 1rem;
line-height: 14px;
color: #383B58;
// color: #fff;
`

export const StyledDiv = styled.div`
display: flex;
flex-direction: column;
align-items: ${props => props.alignItems};
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