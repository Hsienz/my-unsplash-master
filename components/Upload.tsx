import { useJumpUp } from "@/contexts/JumpUpContext";
import Input from "./Input";
import React, { FormEvent } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";

const Upload = () => {
	const { setComponent } = useJumpUp();
	const [user] = useAuthState(auth);
	const handleCancel = () => {
		setComponent(null);
	};
	const checkImage = (url: string) => {
		const img = new Image();
		img.src = url;
		return new Promise(
			(resolve: (res: string) => void, reject: (err: string) => void) => {
				img.onload = () => resolve("");
				img.onerror = () => reject("Invalid URL");
			}
		);
	};
	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		let data:{[key:string]:string} = {

		}
		for (let i = 0; i < e.currentTarget.length; i++) {
			const el = e.currentTarget[i] as HTMLInputElement;
			data[el.name] = el.value;
		}
		delete data[""]
		let url = data["photoUrl"];
		const body = JSON.stringify(data)
		console.log(body)
		checkImage(url)
			.then(async () => {
				await fetch("/api/addPhoto", {
					method: "POST",
					headers: {
						'Content-Type': 'application/json',
					},
					body,
				});
			})
			.catch((err) => {
				alert(err);
			});
	};
	return (
		<form
			className="jump flex flex-col w-[640px] gap-4 justify-between"
			onSubmit={handleSubmit}
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
