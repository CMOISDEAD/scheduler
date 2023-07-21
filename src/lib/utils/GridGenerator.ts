function getGridStartColumn(clase: any, daysOfWeek: string | any[]) {
	return daysOfWeek.indexOf(clase.day) + 2;
}

function getGridEndColumn(clase: ScheduleType, daysOfWeek: string | any[]) {
	return daysOfWeek.indexOf(clase.day) + 3;
}

function getGridStartRow(clase: ScheduleType, hoursOfDay: string | any[]) {
	return hoursOfDay.indexOf(clase.start) + 2;
}

function getGridEndRow(clase: ScheduleType, hoursOfDay: string | any[]) {
	return hoursOfDay.indexOf(clase.end) + 2;
}

export function getLayout(clase: ScheduleType, daysOfWeek: string[], hoursOfDay: string[]) {
	return `grid-column-start: ${getGridStartColumn(clase, daysOfWeek)};
		grid-column-end: ${getGridEndColumn(clase, daysOfWeek)};
		grid-row-start: ${getGridStartRow(clase, hoursOfDay)};
		grid-row-end: ${getGridEndRow(clase, hoursOfDay)};`;
}
