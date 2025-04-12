// expand on date-fns OR
// use date-fns functions for better naming of functions OR
// reduce package size and not use date-fns

// recheck the below sometime later

export const DateUtil = {
	isDateToday(date: string | Date) {
		const todayDate = new Date().setHours(0,0,0,0);
		const theDate = new Date(date).setHours(0,0,0,0);
		return todayDate === theDate;
	},
	isDateWithinDays(date: string | Date, days: number) {
		// within [7, 14, 30, etc.] days, not actually counting for same month
		const todayDate = new Date();
		const theDate = new Date(date);
		var theDiff = todayDate.getTime() - theDate.getTime();
		var diff = Math.abs(theDiff / (1000*60*60*24.0));
		return diff <= days;
	},
	isDateInThisMonth(date: string | Date) {
		const todayDate = new Date();
		const theDate = new Date(date);
		return todayDate.getMonth() === theDate.getMonth();
	},
	isDateInThisYear(date: string | Date) {
		const todayDate = new Date();
		const theDate = new Date(date);
		return todayDate.getFullYear() === theDate.getFullYear();
	}
}