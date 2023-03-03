import { useSearch } from "@/contexts/SearchContext";
import React from "react";
import JumpUp from "./JumpUp";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, orderBy } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import Image from "next/image";
import Masonry from "react-masonry-css";
const Unsplash = () => {
	const { value } = useSearch();
	const [snapshot, loading, error] = useCollection(
		query(collection(firestore, "unsplash"), orderBy("timestamp", "desc"))
	);
	return (
		<div>
			<JumpUp />
			<Masonry className="flex gap-[48px]" columnClassName="flex flex-col gap-[48px]" breakpointCols={3}>
				{snapshot?.docs.map((x: any) => {
					const data = x.data();
					return (
						<div
							className="rounded-[12px] overflow-hidden h-fit"
							key={x.id}
						>
							<Image
								src={data["photoUrl"]}
								alt={data["label"]}
								fill={true}
								style={{ objectFit: "contain" }}
								className="!relative"
							/>
						</div>
					);
				})}
			</Masonry>
		</div>
	);
};

export default Unsplash;
