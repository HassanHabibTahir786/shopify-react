
import { Box } from '@mui/system';
import './App.css';
import BuyGiftCard from './components/BuyGiftCard';
import GetGrip from './components/GetGrip';
import Header from './components/Header';
import Navbar from './components/Navbar'
import SignUpNewsletter from './components/SignUpNewsletter';
import Slider from './components/Slider'
import HiringGallery from './components/HiringGallery'
import SiteOneFooter from './components/SiteOneFooter';

function App() {
  return (
    <div >
      <Header />
      <Navbar />
      <Slider />
      <Box mx={3}>
        <GetGrip />
        <SignUpNewsletter />
        <BuyGiftCard />
        <HiringGallery />
      </Box>
      <SiteOneFooter />

    </div>
  );
}

export default App;
