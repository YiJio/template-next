// packages
import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
// css
import '../styles/globals.css'; // delete
import './index.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

// local font config sample
const arimo = localFont({
	src: [
		{
			path: '../../public/fonts/Arimo-Regular.ttf',
			weight: '400',
			style: 'normal',
		}, {
			path: '../../public/fonts/Arimo-Medium.ttf',
			weight: '500',
			style: 'normal',
		}, {
			path: '../../public/fonts/Arimo-SemiBold.ttf',
			weight: '600',
			style: 'normal',
		}, {
			path: '../../public/fonts/Arimo-Bold.ttf',
			weight: '700',
			style: 'normal',
		}
	],
	variable: '--font-arimo'
});

export const metadata: Metadata = {
	title: 'PROJECT',
	description: 'DESCRIPTION',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable} ${arimo.className}`}>
				<Suspense fallback={<>Loading...</>}>
					{children}
				</Suspense>
			</body>
		</html>
	);
}
