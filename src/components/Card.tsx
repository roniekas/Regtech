import {Roboto, Rowdies} from "next/font/google";
import {Typography} from "@mui/material";
import {getFormattedDateString} from "@/lib/lib";
import Descriptions from "@/components/atoms/Descriptions";

const roboto = Roboto({weight: "400", subsets: ["latin"]});
const rowdies = Rowdies({weight: "700", subsets: ["latin"]});

const Card = ({isActive = false}:{isActive?: boolean}) => {
    return (
        <div className={`${isActive ? 'bg-[#deffe4]' : 'bg-white'} p-5 w-full shadow-neutral-400 shadow-sm rounded-lg`}>
            <Typography variant="h5" gutterBottom className={`${rowdies.className} text-[#040404]`}>
                RegTech Bot
            </Typography>
            
            <Descriptions title={"Number of Interactions"} value={"500"} />
            <Descriptions title={"Most FAQ"} value={"What is AI ?"} />
            <Descriptions title={"CPU Usage"} value={"10 %"} />

            <Typography variant="caption" display="block" gutterBottom className={`${roboto.className} text-right text-[#A2A4A5] mt-3`}>
                {getFormattedDateString()}
            </Typography>
        </div>
    )
}

export default Card;