import { useSearch } from "@/contexts/SearchContext";
import React, { useEffect } from "react";
import JumpUp from "./JumpUp";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, orderBy, where } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import Image from "next/image";
import Masonry from "react-masonry-css";
import UnsplashImage from "./UnsplashImage";
const Unsplash = () => {
	const { value } = useSearch();
	
	const [snapshot, loading, error] = useCollection(
		query(collection(firestore, "unsplash"), where('label','>=',value), where('label', '<=', value+'~'), orderBy('label'), orderBy('timestamp','desc') )
	);
	useEffect(()=>{
		console.log(snapshot)
	})
	return (
		<div>
			<JumpUp />
			<Masonry className="flex gap-[48px]" columnClassName="flex flex-col gap-[48px]" breakpointCols={3}>
				{snapshot?.docs.map((x: any) => {
					const data = x.data();
					return (
						<UnsplashImage key={x.id} id={x.id} url={data['photoUrl']} label={data['label']} uid={data['uid']}/>
					);
				})}
			</Masonry>
		</div>
	);
};

export default Unsplash;
