"use client"
import { AvatarImage } from "./AvatarImage";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { IComment} from "../page"

export function Post({author, avatarUrl, role, comment, createdAt, commentList}: {author: string, avatarUrl: string, role: string, comment: string, createdAt: string, commentList: Array<IComment>}) {

    return (
        <>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <AvatarImage src={avatarUrl} heightSize='3rem' widthSize='3rem' />
                        <div className={styles.authorInfo}>
                            <strong>{author}</strong>
                            <span>{role}</span>
                        </div>
                    </div>
                    <time title="13 de Agosto às 15:33" dateTime={createdAt}>Publicado a 1h</time>
                </header>

                <div className={styles.content}>
                    <p>
                        {comment}
                    </p>
                </div>

                <form className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>

                    <textarea name="feedback" placeholder="Deixe seu comentário"></textarea>

                    <footer>
                        <button type="submit" onClick={(event) => {
                            event.preventDefault();
                        }}>Comentar</button>
                    </footer>
                </form>
                
                {commentList.map(comment => {
                    // eslint-disable-next-line react/jsx-key
                    return <Comment author={comment.author} avatarUrl={comment.avatarUrl} content={comment.comment}/>
                })}
                
            </article>
        </>
    )
}