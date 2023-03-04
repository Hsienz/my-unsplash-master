import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { useJumpUp } from "@/contexts/JumpUpContext";
import Delete from "./Delete";
interface Props {
	url: string;
	label: string;
	uid: string;
    id: string
}

const UnsplashImage: React.FC<Props> = ({ url, uid, label, id }) => {
	const [loaded, setLoaded] = useState(false);
	const [user] = useAuthState(auth);
    const {setComponent} = useJumpUp()
    const handleDelete = () => {
        setComponent(<Delete id={id}/>)
    }
	return (
		<motion.div
			initial={{ opacity: 0, y: 120 }}
			animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 120 }}
			exit={{ opacity: 0, y: 120 }}
			whileHover={{ scale: 1.15, zIndex: 10 }}
			className="rounded-[12px] overflow-hidden h-fit relative"
		>
			<Image
				src={url}
				alt={label}
				fill={true}
				style={{ objectFit: "cover" }}
				className="!relative"
				onLoadingComplete={() => setLoaded(true)}
			/>
			<motion.div
				whileHover="hover"
				initial="normal"
				className="absolute top-0 p-8 left-0 w-full h-full bg-[rgba(0,0,0,0.38)]"
				variants={{
					hover: { opacity: 1 },
					normal: { opacity: 0 },
				}}
			>
				<motion.div
					variants={{
						hover: { y: 0 },
						normal: { y: 120 },
					}}
					className="flex flex-col h-full"
				>
					{uid == user?.uid && (
						<button onClick={handleDelete} className="delete btn self-end">delete</button>
					)}
					<h2 className="text-white font-bold text-[18px] leading-[22px] mt-auto">
						{label}
					</h2>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default UnsplashImage;
