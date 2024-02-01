import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../utils/youtube logo.png';
import SearchBar from './SearchBar';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

import { useDispatch } from 'react-redux';
import { toggle } from '../redux/menu';

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <Stack
      direction='row'
      alignItems='center'
      p={2}
      sx={{
        position: 'sticky',
        background: '#0d0d0d',
        top: 0,
        justifyContent: 'flex-start',
        padding: '40px 0',
      }}
    >
      <Link
        to='/'
        style={{
          display: 'flex',
          position: 'absolute',
          top: '20px',
          left: '72px',
        }}
      >
        <img
          src={logo}
          alt='logo'
          style={{ marginRight: '5px', height: '40px' }}
        />
        <Typography
          id='viewtube-text'
          variant='h4'
          mb={2}
          sx={{ color: 'white', fontFamily: "'League Gothic', sans-serif;" }}
        >
          <span>ViewTube</span>
        </Typography>
      </Link>
      <Button
        onClick={() => dispatch(toggle())}
        sx={{
          position: 'absolute',
          left: '5px',
          height: '40px',
          width: '40px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'white',
          borderRadius: '100px',
          


          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Adjust the color on hover
          },
        }}
      >
        <MenuIcon
          sx={{
            color: 'white',
            position: 'absolute',
            left: '0',
            bottom: '0',
            height: '100%',
            width: '100%',
           


          }}
        />
      </Button>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
