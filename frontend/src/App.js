import Home from './pages/home/Home'
import {theme} from './ui/theme'
import { ThemeProvider } from 'styled-components';


function App() {
  return (

    <ThemeProvider theme={theme}>
      <div >
        <Home />
      </div>
    </ThemeProvider>

  );
}

export default App;
