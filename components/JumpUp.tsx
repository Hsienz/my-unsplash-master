import { useJumpUp } from "@/contexts/JumpUpContext";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const JumpUp = () => {
	const { component, setComponent } = useJumpUp();
	return (
		<AnimatePresence>
			{component && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed w-screen h-screen flex justify-center items-center bg-[rgba(0,0,0,0.25)] z-50 top-0 left-0"
				>
					{component}
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default JumpUp;
