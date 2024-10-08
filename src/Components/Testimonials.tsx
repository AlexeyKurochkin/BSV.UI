import { useState } from "react";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import useShowMore from "../Hooks/useShowMore";

interface Testimonial {
	avatar: JSX.Element;
	name: string;
	occupation: string;
	testimonial: string;
}

const userTestimonials: Testimonial[] = [
	{
		avatar: <Avatar alt="Remy Sharp" src="" />,
		name: "Remy Sharp",
		occupation: "",
		testimonial:
			"I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable.",
	},
	{
		avatar: <Avatar alt="Travis Howard" src="" />,
		name: "Travis Howard",
		occupation: "",
		testimonial:
			"One of the standout features of this product is the exceptional customer support. In my experience, the team behind this product has been quick to respond and incredibly helpful. It's reassuring to know that they stand firmly behind their product.",
	},
	{
		avatar: <Avatar alt="Cindy Baker" src="" />,
		name: "Cindy Baker",
		occupation: "",
		testimonial:
			"The level of simplicity and user-friendliness in this product has significantly simplified my life. I appreciate the creators for delivering a solution that not only meets but exceeds user expectations.",
	},
	{
		avatar: <Avatar alt="Remy Sharp" src="" />,
		name: "Julia Stewart",
		occupation: "",
		testimonial:
			"I appreciate the attention to detail in the design of this product. The small touches make a big difference, and it's evident that the creators focused on delivering a premium experience.",
	},
	{
		avatar: <Avatar alt="Travis Howard" src="" />,
		name: "John Smith",
		occupation: "",
		testimonial:
			"I've tried other similar products, but this one stands out for its innovative features. It's clear that the makers put a lot of thought into creating a solution that truly addresses user needs.",
	},
	{
		avatar: <Avatar alt="Cindy Baker" src="" />,
		name: "Daniel Wolf",
		occupation: "",
		testimonial:
			"The quality of this product exceeded my expectations. It's durable, well-designed, and built to last. Definitely worth the investment!",
	},
];

export default function Testimonials() {
	const [items] = useState<Testimonial[]>(userTestimonials);
	const [itemsToShow, showMore] = useShowMore(items, 4);

	return (
		<Container
			id="testimonials"
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
			<Box
				sx={{
					width: { sm: "100%", md: "60%" },
					textAlign: { sm: "left", md: "center" },
				}}
			>
				<Typography component="h2" variant="h4" color="text.primary">
					Testimonials
				</Typography>
				<Typography variant="body1" color="text.secondary">
					See what our customers love about our products. Discover how we excel in
					efficiency, durability, and satisfaction. Join us for quality, innovation,
					and reliable support.
				</Typography>
			</Box>
			<Grid container spacing={2}>
				{itemsToShow.map((testimonial: Testimonial, index: number) => (
					<Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
						<Card
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
								flexGrow: 1,
								p: 1,
							}}
						>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									{testimonial.testimonial}
								</Typography>
							</CardContent>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "space-between",
									pr: 2,
								}}
							>
								<CardHeader
									avatar={testimonial.avatar}
									title={testimonial.name}
									subheader={testimonial.occupation}
								/>
							</Box>
						</Card>
					</Grid>
				))}
			</Grid>
			{itemsToShow.length < items.length && (
				<Box textAlign="center" my={2}>
					<Button variant="text" onClick={showMore}>
						Show More
					</Button>
				</Box>
			)}
		</Container>
	);
}
