import {Typography} from "@mui/material";
import Image from "next/image";

const ScenarioUpdate = ({question, maker="Admin", time}:{question: string, maker?:string, time:string}) => {
    return (
        <div className={'flex flex-row w-full justify-between items-center'}>
            <div>
                <Typography variant="button" gutterBottom className={'text-bold'}>
                    # {question}
                </Typography>
                <div className={'flex flex-row gap-3 items-center'}>
                    <Image src={'images/cloud.svg'} alt={'cloud'} height={15} width={15} />
                    <Typography variant="caption" display="block" gutterBottom>
                        {maker}
                    </Typography>
                </div>
            </div>
            <Typography variant="caption" display="block" gutterBottom className={'text-[#A2A4A5]'}>
                {time}
            </Typography>
        </div>
    )
}

export default ScenarioUpdate;