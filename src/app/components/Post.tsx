"use client"
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

                <div className={styles.content}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed fuga esse, labore veniam qui necessitatibus in? Optio repudiandae quaerat praesentium tempore temporibus doloremque ipsam fugiat in dolores, qui, labore facere?
                    </p>
                </div>

                <form>
                    <strong>Deixe seu feedback</strong>

                    <textarea name="feedback" placeholder="Deixe seu comentário"></textarea>
                    <button type="submit" onClick={(event) => {
                        event.preventDefault();
                    }}>Comentar</button>
                </form>
            </article>
        </>
    )
}