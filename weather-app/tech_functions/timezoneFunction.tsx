const moment = require("moment-timezone");

export const timezoneFunction = (time: number) => {
	// Create a moment-timezone object with the offset
	const timezone = moment.tz(time * 1000, "UTC");

	// Check if daylight saving time is currently observed
	const isDaylightSavingTime = timezone.isDST();

	// Get the timezone offset in a user-friendly format
	const offsetString = `UTC${time >= 0 ? "+" : ""}${time / 3600}:00`;

	// Create a user-friendly timezone label
	const timezoneLabel = isDaylightSavingTime ? `(EDT)` : `(EST)`;
	return offsetString + " " + timezoneLabel;
};
