import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AirIcon from "@mui/icons-material/Air";

const items = [
	{
		icon: <AirIcon />,
		title: "Felted dreads",
		description: "This item could provide information about the Felted dreads.",
		imageLight: 'url("Features/FeltedDreads.jpg")',
		imageDark: 'url("Features/FeltedDreads.jpg")',
	},
	{
		icon: <AirIcon />,
		title: "Synthetic dreads",
		description:
			"This item could provide information about the Synthetic dreads.",
		imageLight: 'url("Features/SynteticDreads.jpg")',
		imageDark: 'url("Features/SynteticDreads.jpg")',
	},
	{
		icon: <AirIcon />,
		title: "Natural dreads",
		description: "This item could provide information about the Natural dreads.",
		imageLight: 'url("Features/NaturalDreads.jpg")',
		imageDark: 'url("Features/NaturalDreads.jpg")',
	},
];

export default function Features() {
	const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

	const handleItemClick = (index: number) => {
		setSelectedItemIndex(index);
	};

	const selectedFeature = items[selectedItemIndex];

	return (
		<Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
			<Grid container spacing={6}>
				<Grid item xs={12} md={6}>
					<div>
						<Typography component="h2" variant="h4" color="text.primary">
							Dread types:
						</Typography>
						<Typography
							variant="body1"
							color="text.secondary"
							sx={{ mb: { xs: 2, sm: 4 } }}
						>
							Here you can provide a brief overview or description of different type of
							dreads or anything else you want.
						</Typography>
					</div>
					<Grid container item gap={1} sx={{ display: { xs: "auto", sm: "none" } }}>
						{items.map(({ title }, index) => (
							<Chip
								key={index}
								label={title}
								onClick={() => handleItemClick(index)}
								sx={{
									borderColor: (theme) => {
										if (theme.palette.mode === "light") {
											return selectedItemIndex === index ? "primary.light" : "";
										}
										return selectedItemIndex === index ? "primary.light" : "";
									},
									background: (theme) => {
										if (theme.palette.mode === "light") {
											return selectedItemIndex === index ? "none" : "";
										}
										return selectedItemIndex === index ? "none" : "";
									},
									backgroundColor: selectedItemIndex === index ? "primary.main" : "",
									"& .MuiChip-label": {
										color: selectedItemIndex === index ? "#fff" : "",
									},
								}}
							/>
						))}
					</Grid>
					<Box
						component={Card}
						variant="outlined"
						sx={{
							display: { xs: "auto", sm: "none" },
							mt: 4,
						}}
					>
						<Box
							sx={{
								backgroundImage: (theme) =>
									theme.palette.mode === "light"
										? items[selectedItemIndex].imageLight
										: items[selectedItemIndex].imageDark,
								backgroundSize: "cover",
								backgroundPosition: "center",
								minHeight: 280,
							}}
						/>
						<Box sx={{ px: 2, pb: 2 }}>
							<Typography color="text.primary" variant="body2" fontWeight="bold">
								{selectedFeature.title}
							</Typography>
							<Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
								{selectedFeature.description}
							</Typography>
						</Box>
					</Box>
					<Stack
						direction="column"
						justifyContent="center"
						alignItems="flex-start"
						spacing={2}
						useFlexGap
						sx={{
							width: "100%",
							display: { xs: "none", sm: "flex" },
						}}
					>
						{items.map(({ icon, title, description }, index) => (
							<Card
								key={index}
								variant="outlined"
								component={Button}
								onClick={() => handleItemClick(index)}
								sx={{
									p: 3,
									height: "fit-content",
									width: "100%",
									background: "none",
									backgroundColor:
										selectedItemIndex === index ? "action.selected" : undefined,
									borderColor: (theme) => {
										if (theme.palette.mode === "light") {
											return selectedItemIndex === index ? "primary.light" : "grey.200";
										}
										return selectedItemIndex === index ? "primary.dark" : "grey.800";
									},
								}}
							>
								<Box
									sx={{
										width: "100%",
										display: "flex",
										textAlign: "left",
										flexDirection: {
											xs: "column",
											md: "row",
										},
										alignItems: { md: "center" },
										gap: 2.5,
									}}
								>
									<Box
										sx={{
											color: (theme) => {
												if (theme.palette.mode === "light") {
													return selectedItemIndex === index ? "primary.main" : "grey.300";
												}
												return selectedItemIndex === index ? "primary.main" : "grey.700";
											},
										}}
									>
										{icon}
									</Box>
									<Box sx={{ textTransform: "none" }}>
										<Typography color="text.primary" variant="body2" fontWeight="bold">
											{title}
										</Typography>
										<Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
											{description}
										</Typography>
									</Box>
								</Box>
							</Card>
						))}
					</Stack>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
					sx={{ display: { xs: "none", sm: "flex" }, width: "100%" }}
				>
					<Card
						variant="outlined"
						sx={{
							height: "100%",
							width: "100%",
							display: { xs: "none", sm: "flex" },
							pointerEvents: "none",
						}}
					>
						<Box
							sx={{
								m: "auto",
								width: "100%",
								height: "100%",
								backgroundSize: "cover",
								backgroundImage: (theme) =>
									theme.palette.mode === "light"
										? items[selectedItemIndex].imageLight
										: items[selectedItemIndex].imageDark,
							}}
						/>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
}
