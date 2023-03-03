import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SearchProvider from "@/contexts/SearchContext";
import JumpUpProvider from "@/contexts/JumpUpContext";
export default function App({ Component, pageProps }: AppProps) {
	return (
		<SearchProvider>
			<JumpUpProvider>
				<Component {...pageProps} />
			</JumpUpProvider>
		</SearchProvider>
	);
}
