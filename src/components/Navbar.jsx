import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';
import SearchBar from './SearchBar';



const Navbar = () => {
    return (
        <Stack
            direction="row"
            alignItem="center"
            p={2}
            sx={{ position: 'sticky', backgroung: '#000', top: 0, justifyContent: 'space-between' }}
        >
            <Link tp="/" style={{ display: 'flex', alignItem: 'center' }}>
                <img src={logo} alt="logo" height={35} style={{ borderRadius: '10px' }} />
            </Link>
            <SearchBar />
        </Stack>
    )
}

export default Navbar;