import React from 'react';
import {
  Dialog, Button, DialogActions, DialogTitle, DialogContent,
  Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText
} from '@mui/material';
import metamaskIcon from '../../assets/svgs/metamask.svg';
import DraftsIcon from '@mui/icons-material/Drafts';

interface connectProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

function Connect({ open, setOpen }: connectProps) {
  const closeConnect = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={closeConnect}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Connect Wallet"}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                    <img src={metamaskIcon} alt="MetaMask" width="50" height="50" />
                    </ListItemIcon>
                    <ListItemText primary="Metamask" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeConnect}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

/*

*/

export default Connect;