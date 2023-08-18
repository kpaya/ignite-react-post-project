import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import styles from "./page.module.css"


const listaPost = [
	{
		
	}
]


export default function Home() {
	return (
		<>
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					<Post />
					<Post />
				</main>
			</div>
		</>
	)
}
