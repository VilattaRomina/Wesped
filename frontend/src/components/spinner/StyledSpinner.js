import styled from "styled-components";
import {theme} from '../../ui/theme'

export const StyledSpinnerContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(255,255,255,0.4);
    backdrop-filter: blur(1px);
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.primary};
    position: absolute;
    font-size: 2rem;
`
