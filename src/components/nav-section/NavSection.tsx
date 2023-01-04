import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import { Box, List, ListItemText } from '@mui/material';
//
import { StyledBadge, StyledNavItem, StyledNavItemIcon } from './styles';

// ----------------------------------------------------------------------

interface Props {
  data?: any[];
}

export default function NavSection({ data = [], ...other }: Props) {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
  );
}

// ----------------------------------------------------------------------
interface ItemProps {
  item: any;
}

function NavItem({ item }: ItemProps) {
  const { title, path, icon, open, notification } = item;

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      sx={{
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',
          fontWeight: 'fontWeightBold',
        },
      }}
      disabled={!open}
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />

      {notification && <StyledBadge badgeContent={notification} max={99} ></StyledBadge>}
    </StyledNavItem>
  );
}
