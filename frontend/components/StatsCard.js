import { io } from "socket.io-client";
import { useState, useEffect, useRef } from "react";
import TrackCard from "./TrackCard";


export default function StatsCard ({WSURL}) {

	const [Online, setOnline] = useState(false)
	const [Data, setData] = useState({})
	const socket = useRef()

	useEffect(() => {
		const func = async () => {
			socket.current = io(WSURL);

			await socket.current.on("statsres", (data) => { setData(data) });
			setInterval(()=>{socket.current.volatile.emit("statsreq")}, 1000)
			socket.current.on("connect", () => { setOnline(true) } )
			socket.current.on("disconnect", () => { setOnline(false) } )
		}
		func()
		return() => {socket.current.disconnect()}
	}, [WSURL])



	return (
		Object.keys(Data).length!==0 &&
		<div className="m-2 border-2 rounded transition-all delay-500 bg-contain bg-cover bg-no-repeat bg-[url('https://source.unsplash.com/2000x600/?server')]">
		<ul className="flex flex-wrap mb-4 justify-between bg-black/70 border-black border-2 rounded p-4 font-bold text-center">
		<li>Host: {Data.hostname}</li>
		<li>OS: {Data.platform} ({Data.release})</li>
		<li>Uptime: {Data.uptime}</li>

		</ul>
		<div id="status" className="flex flex-col items-center justify-center p-2 text-center md:space-x-4 space-y-4 md:space-y-0 md:flex-row">

		<TrackCard name="Memory" percent={Data.memUsage} used={Data.usedmem} total={Data.totalmem} />
		<TrackCard name="Disk" percent={Data.diskUsage} used={Data.usedDiskSpace} total={Data.totalDiskSpace}  />

		</div>
			<div className="flex items-center justify-center p-2 text-center">
		<span className={`text-center p-2 rounded animate-pulse bg-${Online?"green":"red"}-500`}>{Online?"Online":"Offline"}</span>
		</div>
		</div>
	)

}
