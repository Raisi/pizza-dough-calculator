import type { Metadata } from 'next';
import { Inter, Advent_Pro } from 'next/font/google';
import './globals.css';

const font = Advent_Pro({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Vito Iacopelli 100% Poolish Dough Calculator',
	description: 'Video https://www.youtube.com/watch?v=xUEYRiZlyUM'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${font.className} bg-slate-800`}>{children}</body>
		</html>
	);
}
