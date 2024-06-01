import * as React from "react";
import { PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "./AppAppBar";
import Hero from "./Hero";
import Socials from "./Socials";
import Highlights from "./Highlights";
import Features from "./Features";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Gallery from "./Gallery";

export default function LandingPage() {
	const [mode, setMode] = React.useState<PaletteMode>("light");
	const defaultTheme = createTheme({ palette: { mode } });

	const toggleColorMode = () => {
		setMode((prev) => (prev === "dark" ? "light" : "dark"));
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			<AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
			<Hero />
			<Box sx={{ bgcolor: "background.default" }}>
				<Socials />
				<Gallery />
				<Features />
				<Divider />
				<Testimonials />
				<Divider />
				<Highlights />
				<Divider />
				<FAQ />
				<Divider />
				<Footer />
			</Box>
		</ThemeProvider>
	);
}
