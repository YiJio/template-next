// packages
import { create } from 'zustand';

//const defaultValues = { id: '', name: '', };

interface UserState {
	id: string;
	name: string;
}

interface UserActions {
	setId: (id: string) => void;
	setName: (name: string) => void;
}

export const useUserStore = create<UserState & UserActions>((set) => ({
	id: '',
	setId: (id: string) => set({ id }),
	name: '',
	setName: (name: string) => set({ name })
}));