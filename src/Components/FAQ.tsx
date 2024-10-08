import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ() {
	const [expanded, setExpanded] = React.useState<string | false>(false);

	const handleChange =
		(panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};

	return (
		<Container
			id="faq"
			sx={{
				pt: { xs: 4, sm: 12 },
				pb: { xs: 8, sm: 16 },
				position: "relative",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: { xs: 3, sm: 6 },
			}}
		>
			<Typography
				component="h2"
				variant="h4"
				color="text.primary"
				sx={{
					width: { sm: "100%", md: "60%" },
					textAlign: { sm: "left", md: "center" },
				}}
			>
				Frequently asked questions
			</Typography>
			<Box sx={{ width: "100%" }}>
				<Accordion
					expanded={expanded === "panel1"}
					onChange={handleChange("panel1")}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1d-content"
						id="panel1d-header"
					>
						<Typography component="h3" variant="subtitle2">
							Can i wash my head?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography
							variant="body2"
							gutterBottom
							sx={{ maxWidth: { sm: "100%", md: "70%" } }}
						>
							You can but there are few rules you must follow.
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion
					expanded={expanded === "panel2"}
					onChange={handleChange("panel2")}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2d-content"
						id="panel2d-header"
					>
						<Typography component="h3" variant="subtitle2">
							Can I get my hair back if the dreads didn't meet my expectations?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography
							variant="body2"
							gutterBottom
							sx={{ maxWidth: { sm: "100%", md: "70%" } }}
						>
							Absolutely! We offer a hassle-free return policy. If you&apos;re not
							completely satisfied, you can revert it back.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === "panel3"}
					onChange={handleChange("panel3")}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel3d-content"
						id="panel3d-header"
					>
						<Typography component="h3" variant="subtitle2">
							What makes your product stand out from others in the market?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography
							variant="body2"
							gutterBottom
							sx={{ maxWidth: { sm: "100%", md: "70%" } }}
						>
							Our product distinguishes itself through its adaptability, durability,
							and innovative features. We prioritize user satisfaction and continually
							strive to exceed expectations in every aspect.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === "panel4"}
					onChange={handleChange("panel4")}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel4d-content"
						id="panel4d-header"
					>
						<Typography component="h3" variant="subtitle2">
							Is there a warranty on the product, and what does it cover?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography
							variant="body2"
							gutterBottom
							sx={{ maxWidth: { sm: "100%", md: "70%" } }}
						>
							Oh my god ti chto crazy?
						</Typography>
					</AccordionDetails>
				</Accordion>
			</Box>
		</Container>
	);
}
