import { Sidebar } from "./components/Sidebar"
import styles from "./page.module.css"


export default function Home() {
	return (
		<>
			<div className={styles.wrapper}>
				<Sidebar />
			</div>
		</>
	)
}