export const formatRoute = (route) => {
	return route.replace(/ /g, '_').toLowerCase();
};

export const deFormatRoute = (route) => {
	if (!route) return;
	return route
		.replaceAll('_', ' ')
		.toLowerCase()
		.split(' ')
		.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
		.join(' ');
};
