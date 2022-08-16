import styled from "styled-components";

export const ContainerStyles = styled.section`
max-width: 1300px;
margin: 0 auto;
padding: 0 20px;
position: relative;

//Flex-box
// display: flex;
// gap: 10px;

//grid
display: grid;
grid-template-columns: 1fr 1fr;
gap: 10px;

`

export const ContainerImageLeft = styled.div`
//Flex-box
// max-width: 50%;

`

export const ContainerImageRight = styled.div`
//Flex-box
// max-width: 50%;
// display:flex;
// flex-flow: row wrap;
// gap: 10px;

//grid
display:grid;
grid-template-columns: repeat(2, 1fr);
gap: 10px;

`
export const CardLeft = styled.div`
//Flex-box
// width:100%;

height:100%;
`
export const CardRight = styled.div`
//Flex-box
// width: calc(50% - 5px);
// height: calc(50% - 5px);

height:100%;
position:relative;
`

export const ImageLeft = styled.img`
min-width: 100%;
max-width: 100%;

height:100%;
`
export const ImageRight = styled.img`
min-width: 100%;
max-width: 100%;

height:100%;
`

export const TextStyles = styled.p`
position:absolute;
color: #fff;
bottom:15px;
right:15px;
font-size: 15px;



`

