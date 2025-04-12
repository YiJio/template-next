// use this if want to put all fetches/axios in one place
// should probably update with try catch
// change function names to get/set instead of fetch for more clarity

// important variables
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const FetchUtil = {
	async fetchSimple() {
		const response = await fetch(`${API_URL}/endpoint`, {
			credentials: 'include',
		});
		//if (!response.ok) throw new Error('? data not found.');
		const data = await response.json();
		return data;
	},
	async fetchSomething(id: string) {
		const response = await fetch(`${API_URL}/endpoint/${id}`, {
			credentials: 'include',
		});
		//if (!response.ok) throw new Error('? data not found.');
		const data = await response.json();
		return data;
	},
	async fetchCreate (data: any) {
		const response = await fetch(`${API_URL}/endpoint`, {
			method: 'POST',
			credentials: 'include',
			headers: { 'Content-Type': 'application/json', },
			body: JSON.stringify(data),
		});
		const newData = await response.json();
		return newData;
	},
	async fetchUpdate (data: any) {
		const response = await fetch(`${API_URL}/endpoint`, {
			method: 'POST', // or PUT
			credentials: 'include',
			headers: { 'Content-Type': 'application/json', },
			body: JSON.stringify(data),
		});
		const updatedData = await response.json();
		return updatedData;
	},
}