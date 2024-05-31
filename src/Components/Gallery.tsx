import { useState } from "react";
import {
	ImageList,
	ImageListItem,
	Typography,
	Container,
	useMediaQuery,
	useTheme,
	Modal,
	Fade,
	Box,
	IconButton,
	Button,
} from "@mui/material";
import { useSwipeable } from "react-swipeable";
import CloseIcon from "@mui/icons-material/Close";

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
	const [open, setOpen] = useState(false);
	const [selectedImageIndex, setSelectedImageIndex] = useState(0);
	const [displayedImageCount, setDisplayedImageCount] = useState(4);

	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const allImages = itemData;
	const imagesToShow = isSmallScreen
		? allImages.slice(0, displayedImageCount)
		: allImages;

	const handleOpen = (index) => {
		setSelectedImageIndex(index);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleShowMore = () => {
		setDisplayedImageCount((prevCount) => prevCount + 4);
	};

	const handlers = useSwipeable({
		onSwipedLeft: () => handleSwipe(1),
		onSwipedRight: () => handleSwipe(-1),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	});

	const handleSwipe = (swipeDirection) => {
		let newIndex = selectedImageIndex + swipeDirection;
		newIndex =
			((newIndex % imagesToShow.length) + imagesToShow.length) %
			imagesToShow.length; // Cycle through the images
		setSelectedImageIndex(newIndex);
	};

	return (
		<Container>
			<Typography component="p" variant="h6" align="center" color="text.secondary">
				Examples of my work
			</Typography>
			<ImageList cols={isSmallScreen ? 2 : 6} variant="standard">
				{imagesToShow.map((item, index) => (
					<ImageListItem key={item.img}>
						<img
							srcSet={`${item.img}`}
							src={`${item.img}`}
							alt={item.title}
							loading="lazy"
							onClick={() => {
								handleOpen(index);
							}}
						/>
					</ImageListItem>
				))}
			</ImageList>
			{isSmallScreen && displayedImageCount < allImages.length && (
				<Box textAlign="center" my={2}>
					<Button variant="text" onClick={handleShowMore}>
						Show More
					</Button>
				</Box>
			)}
			<Modal
				open={open}
				onClose={handleClose}
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
					<Box
						{...handlers}
						sx={{
							outline: "none",
							display: "block",
							justifyContent: "center",
							alignItems: "center",
							maxHeight: "90%",
							maxWidth: "90%",
						}}
					>
						<Box sx={{ position: "relative" }}>
							<img
								{...handlers}
								src={allImages[selectedImageIndex].img}
								alt={allImages[selectedImageIndex].img}
								style={{
									width: "100%",
									height: "100%",
									maxHeight: "90vh",
									maxWidth: "90vh",
									objectFit: "contain",
									outline: "none",
								}}
							/>
							<IconButton
								aria-label="close"
								onClick={handleClose}
								sx={{
									position: "absolute",
									right: 8,
									top: 8,
									color: (theme) => theme.palette.grey[100],
									backgroundColor: (theme) => theme.palette.grey[600],
									"&:hover": {
										backgroundColor: "rgba(0, 0, 0, 0.8)",
									},
								}}
							>
								<CloseIcon />
							</IconButton>
						</Box>
					</Box>
				</Fade>
			</Modal>
		</Container>
	);
};

export default Gallery;
