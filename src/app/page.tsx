import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import styles from "./page.module.css"

interface IPost {
	author: string,
	avatarUrl: string,
	role: string,
	comment: string,
	createdAt: string,
	commentList: Array<IComment>
}
export interface IComment {
	author: string,
	avatarUrl: string,
	role: string,
	comment: string,
	createdAt: string,
}



const listaPost: Array<IPost> = [
	{
		author: "Kpaya",
		role: "Desenvolvedor Full-stack",
		avatarUrl: "https://github.com/kpaya.png",
		comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur voluptatum at et, sint laboriosam aliquam! Exercitationem architecto laboriosam autem accusantium mollitia soluta repudiandae, id doloribus, quaerat sequi, eos quia obcaecati.",
		createdAt: "2021-08-13 15:33:00",
		commentList: [
			{
				author: "Google",
				avatarUrl: "https://github.com/google.png",
				role: "Desenvolvedor Front-end",
				comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur voluptatum at et, sint laboriosam aliquam! Exercitationem architecto laboriosam autem accusantium mollitia soluta repudiandae, id doloribus, quaerat sequi, eos quia obcaecati.",
				createdAt: "2021-08-13 15:33:00"
			}
		]
	},
	{
		author: "Microsoft",
		avatarUrl: "https://github.com/microsoft.png",
		role: "Desenvolvedor Back-end",
		comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur voluptatum at et, sint laboriosam aliquam! Exercitationem architecto laboriosam autem accusantium mollitia soluta repudiandae, id doloribus, quaerat sequi, eos quia obcaecati.",
		createdAt: "2021-08-13 15:33:00",
		commentList: []
	}
]


export default function Home() {
	return (
		<>
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{listaPost.map(post => {
						// eslint-disable-next-line react/jsx-key
						return <Post
							author={post.author}
							avatarUrl={post.avatarUrl}
							role={post.role}
							comment={post.comment}
							createdAt={post.createdAt}
							commentList={post.commentList}
						/>
					})}
				</main>
			</div>
		</>
	)
}
