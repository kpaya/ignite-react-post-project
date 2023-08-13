
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Header } from "./components/Header";
import styles from "./layout.module.css"
const roboto = Roboto({ subsets: ['latin'], weight: '400', display: 'swap' })

export const metadata: Metadata = {
	title: 'Ignite | ReactJS',
	description: 'Ignite | ReactJS',
}


export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<div className={styles.wrapper}>
					<Header />
					<div className={styles.center}>
						{children}
					</div>
				</div>

			</body>
		</html>
	)
}
