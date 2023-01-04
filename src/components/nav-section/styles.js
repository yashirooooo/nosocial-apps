// @mui
import { styled } from '@mui/material/styles';
import { Badge, ListItemIcon, ListItemButton } from '@mui/material';

// ----------------------------------------------------------------------

export const StyledBadge = styled(Badge)({
  color: 'inherit',
  left: -20,
  position: 'relative'
});

export const StyledNavItem = styled((props) => <ListItemButton disableGutters {...props} />)(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: 'relative',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}));

export const StyledNavItemIcon = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
