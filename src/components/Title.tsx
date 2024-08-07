import {Roboto, Righteous} from "next/font/google";
import {Typography} from "@mui/material";

const roboto = Roboto({weight: "400", subsets: ["latin"]});
const rightheous = Righteous({weight: "400", subsets: ["latin"]});

const Title = () => {
    return (
        <>
            <Typography variant="subtitle1" gutterBottom className={`${roboto.className} text-[#A2A4A5]`}>
                Compliance Chatbot Dashboard
            </Typography>
            <Typography variant="h5" gutterBottom className={`${rightheous.className} text-[#040404] mt-5 mb-5`}>
                RegTech Bot
            </Typography>
        </>
    )
}

export default Title;