import '@styles/globals.css'
import { Open_Sans } from 'next/font/google'

const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
	title: 'The Sentinels - FRC Team 5599',
	description: 'FRC team located in Bayside, New York',
	icons: {
		shortcut: { url: "/favicon.ico", type: "image/x-icon" }
	}
  };

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={open_sans.className}>{children}</body>
		</html>
	)
}
