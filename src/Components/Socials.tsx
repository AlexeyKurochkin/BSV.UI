import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";

const socials = [
	{
		icon: <InstagramIcon sx={{ fontSize: 100 }} />,
		link: "https://www.instagram.com/nastia.besson/",
	},
	{
		icon: <FacebookIcon sx={{ fontSize: 100 }} />,
		link: "https://www.facebook.com/profile.php?id=61550469448007",
	},
];

export default function Socials() {
	return (
		<Box id="socials" sx={{ py: 4, pt: 0 }}>
			<Typography variant="h4" component="p" align="center" color="text.secondary">
				Find me in
			</Typography>
			<Grid container justifyContent="center" sx={{ mt: 0.5, opacity: 0.6 }}>
				{socials.map((social, index) => (
					<Grid item key={index}>
						<IconButton
							target="_blank"
							color="inherit"
							href={social.link}
							aria-label="LinkedIn"
							sx={{ alignSelf: "center" }}
						>
							{social.icon}
						</IconButton>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
