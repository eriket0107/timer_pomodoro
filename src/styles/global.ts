import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
  }
  body {
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antiliased;
    
  }
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  
`
export const TooltipCSS = css`
  &::before,
  &::after {
    opacity: 0;
    position: absolute;
    color: ${(props) => props.theme['gray-100']};
    background-color: ${(props) => props.theme['black-500']};
  }
  &::before {
    content: attr(aria-label);
    bottom: 120%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.75rem 1rem;
    gap: 0.5rem;
    border-radius: 5px;
    white-space: nowrap;
    transition: 1ms;
    z-index: 1;
  }

  &::after {
    content: '';
    bottom: 115%;
    width: 1rem;
    height: 1rem;
    transform: rotate(45deg);
    transition: 1ms;
    z-index: 0;
  }
  &:hover::before,
  &:hover::after {
    opacity: 1;
  }
`
