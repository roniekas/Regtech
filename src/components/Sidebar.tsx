import {useEffect, useState} from "react";
import Image from "next/image";
import useWindowDimensions from "@/hook/useWindowDimension";

const Sidebar = ({ children }: { children: React.ReactNode}) => {
    const [open, setOpen] = useState(true);
    const [url, setUrl] = useState("");
    const { height, width } = useWindowDimensions();
    const Menus = [
        {title: "Home", src: "home", url: ""},
        {title: "Chat", src: "Chat", url: "/chat"},
        {title: "Download", src: "Download", url: "/download"},
        {title: "Social ", src: "Social", url: "/social"},
        {title: "Setting", src: "Electric", url: "/setting"},
        {title: "Logout", src: "Logout", gap: true, url: "/logout"},
    ];

    useEffect(() => {
        const first = new URL(location.href).pathname.split("/")[1];
        setUrl(first);
        handleNavbar()
    }, [width]);

    function handleNavbar() {
        if(width < 1200){
            setOpen(false);
            return 0;
        }
        setOpen(!open);
    }

    return (
        <div className={"flex scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"}>
            <div
                className={` ${open ? "w-72" : "w-20"} bg-black h-screen p-5 pt-8 relative duration-300`}
            >
                <div className={"flex gap-x-4 items-center"}>
                    <Image
                        src="/images/ai.png"
                        className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
                        alt={"string"}
                        width={50}
                        height={50}
                        onClick={() => handleNavbar()}
                    />
                </div>
                <ul className={"pt-6"}>
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm 
                            items-center gap-x-4 
                            ${Menu.url == url ? 'bg-[#314a35]' : ''}
                            ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
                        >
                            <Image
                                src={`/images/${Menu.src}.svg`}
                                alt={"string"}
                                width={30}
                                height={30}
                            />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                {Menu.title}
                             </span>
                        </li>
                    ))
                    }
                </ul>
            </div>
            <div className={'flex-1 pl-2 pt-3 pr-5 pb-3 bg-[#f7f8fa] text-black'}>
                {children}
            </div>
        </div>
    )
}
export default Sidebar