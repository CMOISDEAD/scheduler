function getGridStartColumn(clase: any, daysOfWeek: string | any[]) {
	return daysOfWeek.indexOf(clase.day) + 1;
}

function getGridEndColumn(clase: ScheduleType, daysOfWeek: string | any[]) {
	return daysOfWeek.indexOf(clase.day) + 2;
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

// NOTE: check the differences
export function createSchedule(classes): ScheduleType[] {
	let schedule: ScheduleType[] = [];
	classes.forEach((clase) => {
		clase.events.forEach((event) => {
			schedule.push({
				name: clase.name,
				duration: `${event.time.from} - ${event.time.to}`,
				day: event.day.charAt(0).toUpperCase() + event.day.slice(1),
				start: event.time.from,
				end: event.time.to
			});
		});
	});
	return schedule;
}
export const generateGraph = (classes) => {
	let graph = {};
	classes.forEach((clase) => {
		clase.events.forEach((event) => {
			if (!graph[event.day]) {
				graph[event.day] = [];
			}
			graph[event.day].push({
				name: clase.name,
				duration: `${event.time.from} - ${event.time.to}`,
				day: event.day.charAt(0).toUpperCase() + event.day.slice(1),
				start: event.time.from,
				end: event.time.to
			});
		});
	});
	return graph;
};
