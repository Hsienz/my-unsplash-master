import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import { useSearch } from "@/contexts/SearchContext";
import { auth, login, logout } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Upload from "./Upload";
import { useJumpUp } from "@/contexts/JumpUpContext";
const Header = () => {
	const { value, setValue } = useSearch();
	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue((value) => e.target.value);
	};
    const {setComponent} = useJumpUp()
	const [user] = useAuthState(auth);
	const handleLogin = () => {
		if (user) return logout();
		else return login();
	};
    const handleAddPhoto = () => {
        setComponent((<Upload />))
    }
	return (
		<div className="flex justify-between">
			<div className="flex gap-8">
				<Image
					src="/assets/my_unsplash_logo.svg"
					alt=""
					width={200}
					height={50}
				/>
				<div className="relative flex px-4 gap-4 border-solid border-2 rounded-[12px] overflow-hidden border-light_gray rounded-">
					<Image
						width={20}
						height={20}
						alt=""
						src="/assets/search_FILL0_wght400_GRAD0_opsz48.svg"
					/>
					<input
						className="outline-none"
						placeholder="Search by name"
						value={value}
						onChange={handleOnChange}
					/>
				</div>
			</div>
			<div className="flex gap-4">
				<button className="special btn" onClick={handleLogin}>
					Sign {user ? "out" : "in"}
				</button>
				<button
					onClick={handleAddPhoto}
					className="functional btn"
				>
					Add a photo
				</button>
			</div>
		</div>
	);
};

export default Header;
