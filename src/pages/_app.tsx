import "@/styles/globals.css";
import type {AppProps} from "next/app";
import Sidebar from "@/components/Sidebar";
import Title from "@/components/Title";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Sidebar>
                <Title />
                <Component {...pageProps} />
            </Sidebar>
        </>
    );
}
