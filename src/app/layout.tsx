import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Vito Iacopelli 100% Poolish Dough Calculator',
	description: 'Video https://www.youtube.com/watch?v=xUEYRiZlyUM'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${inter.className} bg-slate-800`}>{children}</body>
		</html>
	);
}
