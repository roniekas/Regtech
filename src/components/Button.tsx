import Button from '@mui/material/Button';

const Buttons = ({text, onClick, clas}:{text:string, onClick:any, clas?: string}) => {
    return (
        <Button
            variant="contained"
            onClick={onClick}
            className={`bg-[#202020] text-[#47df5e] rounded w-full hover:bg-[#000] ${clas}`}
        >
            {text}
        </Button>
    )
}

export default Buttons;