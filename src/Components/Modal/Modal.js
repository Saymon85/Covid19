import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';


const Modal = (props) => {

    console.log(props);
    return (
        <div>
            <Dialog
              maxWidth='sm'
              fullWidth={true}
              open={props.show}
              onClose={props.handleClose}  
            >
              <DialogTitle>Warning</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                   {props.message}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                  <Button onClick={props.handleClose} color='primary'>Close</Button>
              </DialogActions>
            </Dialog>
        </div>
    )
}

export default Modal;
