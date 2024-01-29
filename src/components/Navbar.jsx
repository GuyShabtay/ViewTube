import { Stack,Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import  logo  from '../utils/youtube logo.png';
import SearchBar from './SearchBar';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => (
  <Stack
    direction='row'
    alignItems='center'
    p={2}
    sx={{
      position: 'sticky',
      background: '#0d0d0d',
      top: 0,
      justifyContent: 'flex-start',
      padding:'40px'
    }}
  >
  <Link to='/' style={{ display: 'flex',position:'absolute',
  top: '20px'}}>
  <img src={logo} alt='logo'  style={{marginRight: '5px',height:'40px'}} />
  <Typography id='viewtube-text' variant="h4"  mb={2} sx={{ color: "white", fontFamily: "'League Gothic', sans-serif;"}}>
  <span>ViewTube</span>
  </Typography>
  
  </Link>
  <SearchBar />
  <MenuIcon sx={{ color: "white"}}></MenuIcon>
  </Stack>
);

export default Navbar;
