import { useState, useEffect } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

const useShowMore = (items: any, initialCount: number) => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

	const [limit, setLimit] = useState(initialCount);
	const [displayedItems, setDisplayedItems] = useState(
		items.slice(0, isSmallScreen ? initialCount : items.length)
	);

	const showMore = () => {
		setLimit(limit + initialCount);
	};

	useEffect(() => {
		if (isSmallScreen) {
			setDisplayedItems(items.slice(0, limit));
		} else {
			setDisplayedItems(items);
		}
	}, [items, limit, isSmallScreen]);

	return [displayedItems, showMore];
};

export default useShowMore;
