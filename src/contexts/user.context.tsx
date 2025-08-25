// packages
import React, { createContext, useContext, useState } from 'react';

interface UserContextType {
	name: string;
	setName: (name: string) => void;
}

const UserContext = createContext<UserContextType | null | undefined>(undefined);

export function useUser(): UserContextType {
	const context = useContext(UserContext);
	if (context === undefined || context === null) {
		throw new Error('useUser must be used within a UserProvider');
	}
	return context;
}

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
	// states
	const [name, setName] = useState<string>('');

	return (
		<UserContext.Provider value={{ name, setName }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserContext;