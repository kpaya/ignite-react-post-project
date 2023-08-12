import { Sidebar } from "./components/Sidebar"
import styles from "./page.module.css"


export default function Home() {
	return (
		<>
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sequi nostrum. Modi, obcaecati repellat nobis enim ipsum vero dolorum dolore libero, incidunt minima optio vel tempore doloremque soluta excepturi ullam.</p>
				</main>
			</div>
		</>
	)
}
