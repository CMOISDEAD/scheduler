// return current date
export const getDate = () => {
	return new Date().getDate();
};

// return current day
export const getDay = () => {
	return new Date().getDay();
};

// return current time
export const getTime = () => {
	return new Date().toLocaleTimeString('en-US', {
		hour12: true,
		hour: 'numeric'
	});
};
