import { Box, List, ListItem, ListItemButton, ListItemIcon, Divider, Drawer } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import * as React from 'react';
import { NavLink } from 'react-router-dom';

type SideBarProps = {
    anchor: Anchor;
}

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const SideBar: React.FC<SideBarProps> = (sideBarProps: SideBarProps) => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });

    const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

    const pages = [
        { key: 'Invoices', path: '/invoices'},
        { key: 'Bills', path: '/bills'}
    ]
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <NavLink className='no_decoration' to='/'>
          <ListItem key='Home' disablePadding>
            <ListItemButton>
              <ListItemIcon>
                    Home
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </NavLink>
      </List>
      <Divider />
      <List>
        {pages.map((page, index) => (
        <NavLink className='no_decoration' to={page.path}>
            <ListItem key={page.key} disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <ChevronRightIcon/> {page.key}
                </ListItemIcon>
                </ListItemButton>
            </ListItem>
        </NavLink>
        ))}
      </List>
    </Box>
  );

  return (
    <div className='sidebar'>
        <Drawer variant="permanent"
            anchor={sideBarProps.anchor}
        >
            {list(sideBarProps.anchor)}
        </Drawer>
    </div>
  );
}

export default SideBar;