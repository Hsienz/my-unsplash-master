import { useSearch } from "@/contexts/SearchContext";
import React, { useEffect, useState } from "react";
import JumpUp from "./JumpUp";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, orderBy, where } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import Image from "next/image";
import Masonry from "react-masonry-css";
import UnsplashImage from "./UnsplashImage";
const Unsplash = () => {
	const { value } = useSearch();
	const [width, setWidth] = useState(0);
	const [breakpoint, setBreakpoint] = useState(0)
	useEffect(() => {
		setWidth(window.innerWidth)
		const temp = () => setWidth(x=>window.innerWidth);
		window.addEventListener("resize", temp);
		return () => window.removeEventListener("resize", temp);
	}, []);
	useEffect(()=>{
		if(width <= 640 ) setBreakpoint(1)
		else if( width <= 1024 ) setBreakpoint(2)
		else return setBreakpoint(3)
	},[width])
	const [snapshot, loading, error] = useCollection(
		query(
			collection(firestore, "unsplash"),
			where("label", ">=", value),
			where("label", "<=", value + "~"),
			orderBy("label"),
			orderBy("timestamp", "desc")
		)
	);
	return (
		<div>
			<JumpUp />
			<Masonry
				className="flex gap-[48px]"
				columnClassName="flex flex-col gap-[48px]"
				breakpointCols={breakpoint}
			>
				{snapshot?.docs.map((x: any) => {
					const data = x.data();
					return (
						<UnsplashImage
							key={x.id}
							id={x.id}
							url={data["photoUrl"]}
							label={data["label"]}
							uid={data["uid"]}
						/>
					);
				})}
			</Masonry>
		</div>
	);
};

export default Unsplash;
