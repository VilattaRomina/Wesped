import styled from "styled-components";


export const ContainerStyles = styled.section`
max-width: 1300px;
margin: 0 auto;
padding: 0 30px;
position: relative;

//Flex-box
// display: flex;
// gap: 10px;

//grid
display: grid;
grid-template-columns: 1fr 1fr;
gap: 10px;

@media (max-width: 768px) {
    display: none;
  }

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
border-radius: 8px;
overflow: hidden;
`
export const CardRight = styled.div`
//Flex-box
// width: calc(50% - 5px);
// height: calc(50% - 5px);

height:100%;
position:relative;
border-radius: 8px;
overflow: hidden;
`

export const ImageLeft = styled.img`
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
right:50px;
font-size: 15px;
cursor:pointer;


`
export const ModalStyle = styled.div`
background-color: rgba(0,0,0,0.9);
height:100vh;
width:100vw;
position: absolute;
bottom:10px;
display: ${props => props.isOpen ? " " : "none"};


div{
max-width:600px;;
max-height:500px;
margin: auto;
padding-top:40px;
   
}

`

export const CloseModalStyle = styled.div`
top: 75px;
right: 50px;
font-size: 20px;
color: white;
position: absolute;
cursor:pointer;


`

