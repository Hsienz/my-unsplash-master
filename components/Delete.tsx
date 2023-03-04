import { useJumpUp } from "@/contexts/JumpUpContext";
import React from "react";
import Input from "./Input";
import { auth, firestore } from "@/lib/firebase";
import { deleteDoc, doc } from "firebase/firestore"
import { useAuthState } from "react-firebase-hooks/auth";
interface Props {
    id: string
}

const Delete:React.FC<Props> = ({id}) => {
    const {setComponent} = useJumpUp()
    const [user] = useAuthState(auth)
    const handleSubmit:React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        handleCancle()
        await deleteDoc(doc(firestore, "unsplash", id))
    }

    const handleCancle = () => {
        setComponent(null)
    }
	return (
		<form
			className="jump flex flex-col w-[640px] gap-4 justify-between"
			onSubmit={handleSubmit}
		>
			<h2>Are you sure?</h2>
			<Input
				label="Password (not complete yet)"
				id="password"
				placeholder="Enter your password"
                type="password"
			/>

			<div className="flex ml-auto gap-4">
				<button
					type="button"
					className="cancel btn"
					onClick={handleCancle}
				>
					Cancel
				</button>
				<button
					type="submit"
					className="warning btn"
				>
					Delete
				</button>
			</div>
		</form>
	);
};

export default Delete;
