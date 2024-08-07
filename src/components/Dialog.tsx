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
            <TextField id="outlined-basic" className={'w-70 mx-5'} variant="outlined" />
            <Typography variant="h6" gutterBottom className={'ml-5 mt-2'}>
                Answer
            </Typography>
            <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                className={'w-70 mx-5 mb-3'}
            />
            <div className={'w-full flex justify-center'}>
                <Buttons text={"Submit"} onClick={() => {}} clas={'w-80 mx-5 mb-3'}/>
            </div>
        </Dialog>
    )
}

export default Dialogs;