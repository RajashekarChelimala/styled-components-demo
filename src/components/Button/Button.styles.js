import styled, { keyframes } from 'styled-components';

export const StyledButton = styled.button`
border:2px solid #4caf50;
background-color: ${props => props.variant === 'outline' ? '#4caf50' : 'white'};
color: ${props => props.variant === 'outline' ? 'white' : '#4caf50'};
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
cursor: pointer;
transition: 0ms all ease-out;
&:hover{
    background-color: ${props => props.variant === 'outline' ? 'white' : '#4caf50'};
    color: ${props => props.variant === 'outline' ? '#4caf50' : 'white'};
}
`

export const FancyButton = styled(StyledButton)`
    background-image: linear-gradient(to right, #f6d350 0%, #fda785 100%);
    border:none;
`

export const SubmitButton = styled(StyledButton).attrs({
    type: 'submit'
})`
    box-shadow:0 9px #999;
    &:active{
        background-color: ${props => props.variant === 'outline' ? 'white' : '#4caf50'};
        box-shadow: 0 5px #666;
        transform:translateY(4px);
    }
`

const rotate = keyframes`
from{
    transform: rotate(0deg);
}
to{
    transform: rotate(360deg);
}
`

export const AnimatedLogo = styled.img`
height:40vmin;
pointer-events: none;
animation: ${rotate} infinite 10s linear;
`

export const DarkButton = styled(StyledButton)`
    border:2px solid ${props=>props.theme.dark.primary};
    background-color: ${props=>props.theme.dark.primary};
    color:${props=>props.theme.dark.text}
`