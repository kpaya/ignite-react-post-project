import { AvatarImage } from "./AvatarImage";
import styles from "./Post.module.css";

export function Post() {

    return (
        <>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <AvatarImage src='https://github.com/kpaya.png' heightSize='3rem' widthSize='3rem' />
                        <div className={styles.authorInfo}>
                            <strong>Kpaya</strong>
                            <span>Software Engineering</span>
                        </div>
                    </div>
                    <time title="13 de Agosto às 15:33" dateTime="2023-08-13 15:33:24">Publicado a 1h</time>
                </header>
            </article>
        </>
    )
}