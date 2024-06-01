import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { scrollToSectionBySectionId } from "../Utils/HelperFunctions";

const logoStyle = {
	width: "140px",
	height: "auto",
	borderRadius: "50%",
};

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" mt={1}>
			{"Copyright © "}
			<Link
				target="_blank"
				href="https://www.linkedin.com/in/alexey-kurochkin-dev/"
			>
				AK Productions&nbsp;
			</Link>
			{new Date().getFullYear()}
		</Typography>
	);
}

export default function Footer() {
	const scrollToSection = (
		e: MouseEvent<HTMLAnchorElement, MouseEvent>,
		sectionId: string
	) => {
		e.preventDefault();
		scrollToSectionBySectionId(sectionId);
	};

	return (
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: { xs: 4, sm: 8 },
				py: { xs: 8, sm: 10 },
				textAlign: { sm: "center", md: "left" },
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: { xs: "column", sm: "row" },
					width: "100%",
					justifyContent: "space-between",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: 4,
						minWidth: { xs: "100%", sm: "25%", md: "20%" },
					}}
				>
					<Box sx={{ width: { xs: "100%", sm: "100%" } }}>
						<Box>
							<img src={"Logo.png"} style={logoStyle} alt="logo of sitemark" />
						</Box>
						<Typography variant="body2" fontWeight={600}>
							Anastasia Besson
						</Typography>
						<Typography variant="body2" color="text.secondary" mb={2}>
							<Link target="_blank" href="https://www.instagram.com/nastia.besson/">
								Contact me
							</Link>{" "}
							for any questions.
						</Typography>
					</Box>
				</Box>
				<Box
					sx={{
						display: {
							sm: "flex",
						},
						minWidth: 300,
						width: "100%",
						minHeight: 300,
						mx: { xs: 0, sm: 2 },
					}}
				>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1531.6531103499156!2d25.26578038184219!3d54.67497372168125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd946df8b113b1%3A0xbd4648114fb3a87d!2sVytenio%20g.%2C%20Vilnius%2C%2003229%20Vilniaus%20m.%20sav.!5e0!3m2!1sru!2slt!4v1717261186270!5m2!1sru!2slt"
						height="300"
						style={{ border: 0, width: "100%" }}
						allowFullScreen={false}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</Box>
				<Box
					sx={{
						display: { xs: "none", sm: "flex" },
						flexDirection: "column",
						gap: 1,
					}}
				>
					<Typography variant="body2" fontWeight={600}>
						Product
					</Typography>
					<Link
						color="text.secondary"
						href="#"
						onClick={(e) => scrollToSection(e, "gallery")}
					>
						Gallery
					</Link>
					<Link
						color="text.secondary"
						href="#"
						onClick={(e) => scrollToSection(e, "features")}
					>
						Features
					</Link>
					<Link
						color="text.secondary"
						href="#gallery"
						onClick={(e) => scrollToSection(e, "testimonials")}
					>
						Testimonials
					</Link>
					<Link
						color="text.secondary"
						href="#"
						onClick={(e) => scrollToSection(e, "highlights")}
					>
						Highlights
					</Link>
					<Link
						color="text.secondary"
						href="#"
						onClick={(e) => scrollToSection(e, "faq")}
					>
						FAQs
					</Link>
				</Box>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					pt: { xs: 4, sm: 8 },
					width: "100%",
					borderTop: "1px solid",
					borderColor: "divider",
				}}
			>
				<div>
					<Copyright />
				</div>
				<Stack
					direction="row"
					justifyContent="left"
					spacing={1}
					useFlexGap
					sx={{
						color: "text.secondary",
					}}
				>
					<IconButton
						target="_blank"
						color="inherit"
						href="https://github.com/AlexeyKurochkin"
						aria-label="GitHub"
						sx={{ alignSelf: "center" }}
					>
						<FacebookIcon />
					</IconButton>
					<IconButton
						target="_blank"
						color="inherit"
						href="https://www.linkedin.com/in/alexey-kurochkin-dev/"
						aria-label="LinkedIn"
						sx={{ alignSelf: "center" }}
					>
						<LinkedInIcon />
					</IconButton>
				</Stack>
			</Box>
		</Container>
	);
}
