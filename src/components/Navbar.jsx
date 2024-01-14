import { Stack,Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import  logo  from '../utils/youtube logo.png';
import SearchBar from './SearchBar';
const Navbar = () => (
  <Stack
    direction='row'
    alignItems='center'
    p={2}
    sx={{
      position: 'sticky',
      background: '#000',
      top: 0,
      justifyContent: 'space-between',
    }}
  >
    <Link to='/' style={{ display: 'flex'}}>
      <img src={logo} alt='logo'  style={{marginRight: '2px',height:'40px'}} />
     
      <Typography id='viewtube-text' variant="h4"  mb={2} sx={{ color: "white", fontFamily: "'League Gothic', sans-serif;"}}>
           <span>ViewTube</span>
        </Typography>
        
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
