import Head  from "next/head";
import StatsCard from "@/components/StatsCard";


export default function Dashboard () {

    return ( 
        <>
        <Head>
        <title>Dashboard - Stats</title>
        </Head>
        {process.env.NEXT_PUBLIC_WS_URL?
            JSON.parse(process.env.NEXT_PUBLIC_WS_URL).map(url => {
                return ( <StatsCard key={url} WSURL={url}/> )
            }):
            <p className="h-screen w-screen flex items-center justify-center">
            No Servers Found!</p> }
        </>
    )}


