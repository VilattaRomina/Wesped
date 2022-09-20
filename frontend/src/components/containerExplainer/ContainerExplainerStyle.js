import styled from 'styled-components'

export const IconMarginStyle = styled.div`
display: flex;
justify-content: space-around;
padding: 40px 0;
margin: 0 auto;
max-width: 1366px;

@media (max-width: 414px) {
flex-direction: column;
justify-content: space-between;
}
`

export const IconContainerStyle = styled.div`
/* background-color: #fef7ef; */
background-color: ${props => props.theme.background};
margin-top: 30px;


`

export const IconBoxStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;

h4{
    padding-top: 20px;
    color: #383B58;
    font-size: 18px;

    @media (max-width: 768px) {
    font-size: 14px;
    padding-bottom: 40px;
}
}
`

export const ImageIconStyle = styled.img`
width: 80px;
height: 80px;

@media (max-width: 768px) {
    width: 70px;
height: 70px;
}

`