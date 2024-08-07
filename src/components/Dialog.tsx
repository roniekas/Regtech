import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {TextField, Typography} from "@mui/material";
import Buttons from "@/components/Button";

export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
}

const Dialogs = (props: SimpleDialogProps) => {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value: string) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open} className={'p-5'}>
            <DialogTitle>Add New Scenario</DialogTitle>
            <Typography variant="h6" gutterBottom className={'ml-5'}>
                Title
            </Typography>
            <TextField id="outlined-basic" className={'w-96 mx-5'} variant="outlined" />
            <Typography variant="h6" gutterBottom className={'ml-5 mt-2'}>
                Answer
            </Typography>
            <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                className={'w-96 mx-5 mb-3'}
            />
            <Buttons text={"Submit"} onClick={() => {}} clas={'w-96 mx-5 mb-3'}/>
        </Dialog>
    )
}

export default Dialogs;