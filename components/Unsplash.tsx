import { useSearch } from "@/contexts/SearchContext";
import React from "react";
import JumpUp from "./JumpUp";

const Unsplash = () => {
	const { value } = useSearch();
	return (
		<div>
            <JumpUp />
			Unsplash
			<div>{value}</div>

		</div>
	);
};

export default Unsplash;
