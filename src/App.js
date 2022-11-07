
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

import { createTheme, ThemeProvider, } from '@mui/material/styles';
import GridImagesList from './components/GridImagesList';
import NewArrivals from './components/NewArrivals';
import FreshFromOurBlog from './components/FreshFromOurBlog';
import SiteTwoFooter from './components/SiteTwoFooter';
const theme = createTheme({
  typography: {
    fontFamily: [
      'Josefin Sans',
      'sans-serif'
    ].join(','),
  },
});
const poppinsTheme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif'
    ].join(','),
  },
});


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
      <ThemeProvider theme={poppinsTheme}>

        <Box px={{ xs: 1, md: 6, lg: 11 }}>
          <GridImagesList />
          <NewArrivals />
          <FreshFromOurBlog />
        </Box>
        <SiteTwoFooter />
      </ThemeProvider>

    </>


  );
}

export default App;
