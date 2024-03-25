"use client";
import { useConfig } from "wagmi";
import './globals.css'
import "@rainbow-me/rainbowkit/styles.css";
import {
	getDefaultConfig,
	RainbowKitProvider,
	Theme,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";


const myCustomTheme: Theme = {
	blurs: {
		modalOverlay: "...",
	},
	colors: {
		accentColor: "bg-gradient-to-r from-[#ff2df7] to-[#5200ff]",
		accentColorForeground: "white",
		actionButtonBorder: "...",
		actionButtonBorderMobile: "...",
		actionButtonSecondaryBackground: "white",
		closeButton: "...",
		closeButtonBackground: "...",
		connectButtonBackground: "red",
		generalBorder: "red",
		connectButtonText: "white",
		modalBackground: "black",
		connectButtonBackgroundError: "...",
		connectButtonInnerBackground: "leverage",
		connectButtonTextError: "...",
		connectionIndicator: "...",
		downloadBottomCardBackground: "...",
		downloadTopCardBackground: "...",
		error: "...",
		generalBorderDim: "...",
		menuItemBackground: "...",
		modalBackdrop: "...",
		modalBorder: "...",
		modalText: "white",
		modalTextDim: "white",
		modalTextSecondary: "white",
		profileAction: "...",
		profileActionHover: "...",
		profileForeground: "...",
		selectedOptionBorder: "...",
		standby: "...",
	},
	radii: {
		actionButton: "9999px",
		connectButton: "12px",
		menuButton: "12px",
		modal: "24px",
		modalMobile: "28px",
	},
	fonts: {
		body: "Inter",
	},
	shadows: {
		connectButton: "...",
		dialog: "...",
		profileDetailsAction: "...",
		selectedOption: "...",
		selectedWallet: "...",
		walletLogo: "...",
	},
};
export default function Providers({ children }: any) {
	const queryClient = new QueryClient();

	const config = getDefaultConfig({
		appName: "DECENTRAPAYAI",
		projectId: "YOUR_PROJECT_ID",
		chains: [mainnet],
		ssr: true, // If your dApp uses server side rendering (SSR)
	});

	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<RainbowKitProvider coolMode theme={myCustomTheme}>
					{children}
				</RainbowKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	);
}
