import Card from "@/components/Card";
import {Typography} from "@mui/material";
import {Rubik} from "next/font/google";
import ScenarioUpdate from "@/components/ScenarioUpdate";
import Buttons from "@/components/Button";
import Spacer from "@/components/Spacer";
import CompliantUpdates from "@/components/CompliantUpdates";
import Dialogs from "@/components/Dialog";
import {useState} from "react";

const rubik = Rubik({weight: "400", subsets: ["latin"]});

export default function Home() {
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: string) => {
        setOpen(false);
    };
    const Updates = [
        {question: "What is AI?", maker: "Opr", time:"Today, 10:44 AM"},
        {question: "What is AI?", maker: "Opr", time:"Today, 10:44 AM"},
        {question: "What is AI?", maker: "Opr", time:"Today, 10:44 AM"},
        {question: "What is AI?", maker: "Opr", time:"Today, 10:44 AM"},
        {question: "What is AI?", maker: "Opr", time:"Today, 10:44 AM"},
        {question: "What is AI?", maker: "Opr", time:"Today, 10:44 AM"},
        {question: "What is AI?", maker: "Opr", time:"Today, 10:44 AM"},
        {question: "What is AI?", maker: "Opr", time:"Today, 10:44 AM"},
        {question: "What is AI?", maker: "Opr", time:"Today, 10:44 AM"},
        {question: "What is AI?", maker: "Opr", time:"Today, 10:44 AM"},
        {question: "What is AI?", maker: "Opr", time:"Today, 10:44 AM"},
        {question: "What is AI?", maker: "Opr", time:"Today, 10:44 AM"},
        {question: "What is AI?", maker: "Opr", time:"Today, 10:44 AM"},
    ];

    const Compliance = [
        {name: "Muhammad Ali"},
        {name: "Muhammad Ali"},
        {name: "Muhammad Ali"},
        {name: "Muhammad Ali"},
        {name: "Muhammad Ali"},
        {name: "Muhammad Ali"},
        {name: "Muhammad Ali"},
        {name: "Muhammad Ali"},
        {name: "Muhammad Ali"},
    ];
    return (
        <>
            <div className="w-full flex flex-col scrollbar-hide">
                <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-5">
                    <Card isActive/>
                    <Card/>
                    <Card/>
                </div>
                <div
                    className="flex-grow w-full max-h-full flex flex-col sm:flex-row justify-between gap-5 mt-5 overflow-scroll scrollbar-hide pb-5">
                    <div
                        className="flex-[3_3_0%] max-h-svh bg-white rounded shadow-sm shadow-neutral-500 pt-0 p-5 overflow-auto scrollbar-hide">
                        <Typography
                            variant="h6"
                            gutterBottom
                            className={`${rubik.className} border-b-2 sticky top-0 bg-white z-10 pt-5 mb-5`}
                        >
                            Latest Scenario Update
                        </Typography>
                        {Updates.map((Update, index) => (
                            <ScenarioUpdate key={index} question={Update.question} maker={Update.maker}
                                            time={Update.time}/>
                        ))}
                        <Spacer size={5}/>
                        <Buttons text={'Add New Scenario'} onClick={handleClickOpen}/>
                    </div>
                    <div
                        className="flex-[7_7_0%] max-h-svh bg-white rounded shadow-sm shadow-neutral-500 pt-0 p-5 overflow-scroll scrollbar-hide">
                        <Typography
                            variant="h6"
                            gutterBottom
                            className={`${rubik.className} border-b-2 sticky top-0 bg-white z-10 pt-5 mb-5`}
                        >
                            New Compliance Updates
                        </Typography>
                        <Typography variant="overline" display="block" gutterBottom className={'text-[#A2A4A5]'}>
                            Newest
                        </Typography>
                        {Compliance.map((com, i) => (
                            <CompliantUpdates key={i} name={com.name}/>
                        ))}
                    </div>
                </div>

                <div className={'flex flex-row justify-between items-center text-[#A2A4A5] '}>
                    <Typography variant="caption" display="block" gutterBottom>
                        Copyright 2024 RONS Inc.
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        Buold for RigTech.ID
                    </Typography>
                </div>
            </div>
            <Dialogs selectedValue={selectedValue}
                     open={open}
                     onClose={handleClose}
            />
        </>
    );
}
