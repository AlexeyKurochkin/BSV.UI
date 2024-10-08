import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function Hero() {
	return (
		<Box
			id="hero"
			sx={(theme) => ({
				width: "100%",
				backgroundImage:
					theme.palette.mode === "light"
						? "linear-gradient(180deg, #CEE5FD, #FFF)"
						: `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
				backgroundSize: "100% 20%",
				backgroundRepeat: "no-repeat",
			})}
		>
			<Container
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					pt: { xs: 14, sm: 20 },
					pb: { xs: 8, sm: 8 },
				}}
			>
				<Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
					<Typography
						variant="h1"
						sx={{
							display: "flex",
							flexDirection: { xs: "column", md: "row" },
							alignSelf: "center",
							textAlign: "center",
							fontSize: "clamp(3.5rem, 10vw, 4rem)",
						}}
					>
						Dreads in&nbsp;
						<Typography
							component="span"
							variant="h1"
							sx={{
								fontSize: "clamp(3rem, 10vw, 4rem)",
								color: (theme) =>
									theme.palette.mode === "light" ? "primary.main" : "primary.light",
							}}
						>
							Vilnius
						</Typography>
					</Typography>
					<Typography
						textAlign="center"
						color="text.secondary"
						sx={{
							alignSelf: "center",
							width: { sm: "100%", md: "80%" },
						}}
					>
						My name is Anastasia Besson. Here is my pitching text.
					</Typography>
					<Typography
						textAlign="center"
						color="text.secondary"
						sx={{
							pt: 2,
							alignSelf: "center",
							width: { sm: "100%", md: "80%" },
						}}
					>
						Subscribe to get discount or free consultation.
					</Typography>
					<Stack
						component="form"
						direction={{ xs: "column", sm: "row" }}
						alignSelf="center"
						spacing={1}
						useFlexGap
						sx={{ width: { xs: "100%", sm: "auto" } }}
					>
						<TextField
							id="outlined-basic"
							hiddenLabel
							size="small"
							variant="outlined"
							aria-label="Enter your email address"
							placeholder="Your email address"
							inputProps={{
								autoComplete: "off",
								"aria-label": "Enter your email address",
							}}
						/>
						<Button variant="contained" color="primary">
							Get Discount
						</Button>
					</Stack>
				</Stack>
				<Box
					id="image"
					sx={(theme) => ({
						mt: { xs: 8, sm: 10 },
						alignSelf: "center",
						height: { xs: 300, sm: 700 },
						width: "100%",
						backgroundImage:
							theme.palette.mode === "light"
								? 'url("/MainPhoto.jpg")'
								: 'url("/MainPhoto.jpg")',
						backgroundSize: "cover",
						borderRadius: "10px",
						outline: "1px solid",
						outlineColor:
							theme.palette.mode === "light"
								? alpha("#BFCCD9", 0.5)
								: alpha("#9CCCFC", 0.1),
						boxShadow:
							theme.palette.mode === "light"
								? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
								: `0 0 24px 12px ${alpha("#DDE3E8", 0.4)}`,
					})}
				/>
			</Container>
		</Box>
	);
}
