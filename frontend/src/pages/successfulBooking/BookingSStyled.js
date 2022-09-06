import styled from "styled-components";

export const ButtonStyle = styled.button`
  position: absolute;

  background: #1dbeb4;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
`;

export const ImageStyle = styled.img`
  margin: 1rem;
  height: 3.7rem;
  border-radius: 0.5rem;
`;

export const H2Style = styled.h2`
padding-bottom: 1%;
  top: 34.44%;
  bottom: 48.34%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  color: #1dbeb4;

@media (max-width: 414px) {
    top: 39.67%;
    bottom: 43%;
    font-size: 20px;
    line-height: 23px;
}
`;

export const H3Style = styled.h3`
align-self:center;
  top: 52.65%;
  bottom: 37.75%;
  padding-bottom: 5%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  color: #383b58;


@media (max-width: 414px) {
    top: 55.33%;
    bottom: 35%;
    font-size: 16px;
line-height: 19px;
}
`;

export const DivStyle = styled.div`
justify-content: center;
align-items: center;
display:flex;
flex-direction: column;
width: 638px;
height: 302px;
left: 364px;
top: 233px;


@media (min-width: 415px) and (max-width: 768px){
    left: 364px;
    top: 233px
    width: 638px;
height: 302px;
}

@media (max-width: 414px) {
    left: 364px;
    top: 233px
    width: 638px;
height: 302px;
}
`;