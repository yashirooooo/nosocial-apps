import React from 'react';
import { Dialog, Button, DialogActions, DialogTitle, DialogContentText, DialogContent } from '@mui/material';

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
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeConnect}>Disagree</Button>
          <Button onClick={closeConnect} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Connect;