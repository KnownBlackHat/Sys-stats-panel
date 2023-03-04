import Head  from "next/head";
import StatsCard from "@/components/StatsCard";


export default function Dashboard () {

	return ( 
		<>
		<Head>
		<title>Dashboard - Stats</title>
		</Head>
		{JSON.parse(process.env.NEXT_PUBLIC_WS_URL).map(url => {
			return ( <StatsCard key={url} WSURL={url}/> )
		})}
		</>
	)}


