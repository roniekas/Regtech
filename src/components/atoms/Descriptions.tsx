import {Typography} from "@mui/material";

const Descriptions = ({title, value}:{title: string, value: string}) => {
    return (
        <div className={'flex flex-row w-full justify-between'}>
            <Typography variant="body2" gutterBottom className={'flex-1'}>
                {title}
            </Typography>
            <Typography variant="body2" gutterBottom className={'text-right'}>
                :
            </Typography>
            <Typography variant="subtitle2" gutterBottom className={'flex-1 pl-2'}>
                {value}
            </Typography>
        </div>
    )
}

export default Descriptions;