export const scrollToSectionBySectionId = (sectionId: string) => {
	const sectionElement = document.getElementById(sectionId);
	const offset = 128;
	if (sectionElement) {
		const targetScroll = sectionElement.offsetTop - offset;
		sectionElement.scrollIntoView({ behavior: "smooth" });
		window.scrollTo({
			top: targetScroll,
			behavior: "smooth",
		});
	}
};
