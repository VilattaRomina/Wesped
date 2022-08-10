import Recommendations from './pages/home/recommendations/Recommendations';
import {theme} from './ui/theme'
import { ThemeProvider } from 'styled-components';


function App() {
  return (

    <ThemeProvider theme={theme}>
      <div >
        <Recommendations />
      </div>
    </ThemeProvider>

  );
}

export default App;
