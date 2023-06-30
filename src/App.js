import logo from './logo.svg';
import './App.css';
import { AnimatedLogo, DarkButton, FancyButton, StyledButton, SubmitButton } from './components/Button/Button'
import { ThemeProvider } from 'styled-components';
import {createGlobalStyle} from 'styled-components';

const theme = {
  dark: {
    primary: '#000',
    text: '#fff'
  },
  light: {
    primary: '#fff',
    text: '#000'
  },
  fontFamily:'Roboro'
}

const GlobalStyle = createGlobalStyle`
button{
  font-family: ${theme.fontFamily};
}

`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <div className="App">
        <AnimatedLogo src={logo} />
        <div>
          <br />
        </div>
        <StyledButton>Style Button</StyledButton>
        <div>
          <br />
        </div>
        <StyledButton variant='outline'>Styled Button</StyledButton>
        <div>
          <br />
        </div>
        <FancyButton as='a' type='submit'>Fancy Button</FancyButton>
        <div>
          <br />
        </div>
        <SubmitButton>Submit</SubmitButton>
        <div>
          <br />
        </div>
        <DarkButton>Dark Theme</DarkButton>
      </div>
    </ThemeProvider>

  );
}

export default App;