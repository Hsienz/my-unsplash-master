import { createContext, SetStateAction, useContext, useState } from "react";
interface Context {
	component: JSX.Element | null;
	setComponent: React.Dispatch<SetStateAction<JSX.Element | null>>;
}

const JumpUpContext = createContext<Context>({
	component: null,
	setComponent: () => {},
});

interface Props {
	children: JSX.Element;
}

const JumpUpProvider: React.FC<Props> = ({ children }) => {
	const [component, setComponent] = useState<JSX.Element | null>(null);
	return (
		<JumpUpContext.Provider
			value={{
				component,
				setComponent,
			}}
		>
			{children}
		</JumpUpContext.Provider>
	);
};

export default JumpUpProvider
export const useJumpUp = () => useContext(JumpUpContext)
