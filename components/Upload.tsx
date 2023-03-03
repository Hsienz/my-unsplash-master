import { useJumpUp } from "@/contexts/JumpUpContext";
import Input from "./Input";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import Image from "next/image";

const Upload = () => {
	const { setComponent } = useJumpUp();
	const [user] = useAuthState(auth);
	const handleCancel = () => {
		setComponent(null);
	};
	return (
		<form
			method="POST"
			action="/api/addPhoto"
			className="jump flex flex-col w-[640px] gap-4 justify-between"
		>
			<h2>Add a new photo</h2>
			<input type="hidden" name="uid" value={user?.uid} />
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
				<button
					type="button"
					className="cancel btn"
					onClick={handleCancel}
				>
					Cancel
				</button>
				<button
					type="submit"
					onClick={handleCancel}
					className="functional btn"
				>
					Submit
				</button>
			</div>
		</form>
	);
};

export default Upload;
