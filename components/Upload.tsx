import { useJumpUp } from "@/contexts/JumpUpContext";
import Input from "./Input";
import React from "react";

const Upload = () => {
	const { setComponent } = useJumpUp();
	const handleCancel = () => {
		setComponent(null);
	};
	return (
		<div className="jump flex flex-col w-[640px] gap-4 justify-between">
			<h2>Add a new photo</h2>
			<Input
				label="Label"
				id="label"
				placeholder="Suspendisse elit massa"
			/>
			<Input
				label="Photo URL"
				id="photoUrl"
				placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
			/>
			<div className="flex ml-auto gap-4">
				<button className="cancel btn" onClick={handleCancel}>
					Cancel
				</button>
				<button className="functional btn">Submit</button>
			</div>
		</div>
	);
};

export default Upload;
