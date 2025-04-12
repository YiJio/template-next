// packages
import React, { ReactNode } from 'react';
import type { Metadata } from 'next';

interface Path1LayoutProps {
	children: ReactNode;
}

export const metadata: Metadata = {
  title: 'PROJECT | TITLE',
  description: 'DESCRIPTION',
};

const Path1Layout = ({ children }: Path1LayoutProps) => {
	
	return (
		<>
			{children}
		</>
	);
}

export default Path1Layout;