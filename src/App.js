
import { Box } from '@mui/system';
import './App.css';
import GetGrip from './components/GetGrip';
import Header from './components/Header';
import Navbar from './components/Navbar'
import Slider from './components/Slider'

function App() {
  return (
    <div >
      <Header />
      <Navbar />
      <Slider />
      <Box mx={3}>
        <GetGrip />

      </Box>

    </div>
  );
}

export default App;
