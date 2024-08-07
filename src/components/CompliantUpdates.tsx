import Image from "next/image";
import {Typography} from "@mui/material";

const CompliantUpdates = ({name}:{name:string}) => {
    return (
        <div className="flex flex-col sm:flex-row sm:items-start w-full justify-between gap-5 cursor-pointer">
            <div className="flex flex-row gap-5">
                <Image src={'/images/play-store.svg'} alt={'playstore'} height={30} width={30}/>
                <Image src={'/images/photo.svg'} alt={'man'} height={60} width={60}/>
            </div>
            <div className="flex-1">
                <Typography variant="h6" gutterBottom>
                    {name}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom className="text-[#A2A4A5]">
                    2m ago
                </Typography>
                <Typography variant="subtitle1" gutterBottom className="text-[#A2A4A5]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deserunt eius eveniet excepturi
                    fugiat magni molestias nam rerum tempora vitae.
                </Typography>
            </div>
            <Image
                src={'/images/next.svg'}
                alt={'next'}
                height={30}
                width={30}
                className="hidden sm:block" // Show on small screens and up
            />
        </div>
    )
}

export default CompliantUpdates;