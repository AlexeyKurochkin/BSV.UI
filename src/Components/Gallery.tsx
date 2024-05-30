import React from "react";
import {
	ImageList,
	ImageListItem,
	Typography,
	Container,
	useMediaQuery,
	useTheme,
	Modal,
	Fade,
} from "@mui/material";

const itemData = [
	{
		img: "WorkSamples/1.jpg",
		title: "Dreads 1",
	},
	{
		img: "WorkSamples/2.jpg",
		title: "Dreads 2",
	},
	{
		img: "WorkSamples/3.jpg",
		title: "Dreads 3",
	},
	{
		img: "WorkSamples/4.jpg",
		title: "Dreads 4",
	},
	{
		img: "WorkSamples/5.jpg",
		title: "Dreads 5",
	},
	{
		img: "WorkSamples/6.jpg",
		title: "Dreads 6",
	},
	{
		img: "WorkSamples/7.jpg",
		title: "Dreads 7",
	},
	{
		img: "WorkSamples/8.jpg",
		title: "Dreads 8",
	},
	{
		img: "WorkSamples/9.jpg",
		title: "Dreads 9",
	},
	{
		img: "WorkSamples/10.jpg",
		title: "Dreads 10",
	},
	{
		img: "WorkSamples/11.jpg",
		title: "Dreads 11",
	},
	{
		img: "WorkSamples/12.jpg",
		title: "Dreads 12",
	},
];

const Gallery = () => {
	const [open, setOpen] = React.useState(false);
	const [selectedImage, setSelectedImage] = React.useState("");

	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const images = isSmallScreen ? itemData.slice(0, 2) : itemData;

	const handleOpen = (image) => {
		setSelectedImage(image);
		setOpen(true);
	};

	const handleCLose = () => {
		setOpen(false);
	};

	return (
		<Container>
			<Typography component="p" variant="h6" align="center" color="text.secondary">
				Examples of my work
			</Typography>
			<ImageList cols={isSmallScreen ? 2 : 6} variant="standard">
				{images.map((item) => (
					<ImageListItem key={item.img}>
						<img
							srcSet={`${item.img}`}
							src={`${item.img}`}
							alt={item.title}
							loading="lazy"
							onClick={() => {
								handleOpen(item.img);
							}}
						/>
					</ImageListItem>
				))}
			</ImageList>
			<Modal
				open={open}
				onClose={handleCLose}
				aria-labelledby="work-sample"
				aria-describedby="work-sample"
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
				disableScrollLock={true}
			>
				<Fade in={open} timeout={500}>
					<img
						src={selectedImage}
						alt={selectedImage}
						style={{ maxHeight: "90%", maxWidth: "90%", outline: "none" }}
					/>
				</Fade>
			</Modal>
		</Container>
	);
};

export default Gallery;
