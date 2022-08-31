import styled from "styled-components";

export const BodyStyle = styled.section`
padding-top:81px;
`

export const ContainerStyle = styled.div`
// display:grid;
// grid-template-columns: 1fr 1fr;

display:flex;
justify-content:center;

`
export const ContainerBooking = styled.div`
width:400px;
margin-top:70px;
margin-bottom:20px;
`
export const ContainerForm = styled.div`
width:900px;
margin-right:20px;
margin-bottom:20px;
`

export const LineStyles = styled.hr`
  border-color:${props => props.theme.primary};
`

