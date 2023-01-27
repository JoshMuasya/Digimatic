import { React, useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';

import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

  return (
    <div className='fixed bottom-0'>
        <div>
            <HomeIcon />
        </div>       
    </div>
  )
}

export default Navbar