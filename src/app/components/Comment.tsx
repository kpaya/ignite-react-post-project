"use client"
import { Trash, ThumbsUp } from "phosphor-react";
import { AvatarImage } from "./AvatarImage";
import styles from "./Comment.module.css";

export function Comment() {
    return (
        <div className={styles.comment}>
            <AvatarImage src="https://github.com/kpaya.png" heightSize="2rem" widthSize="2rem" />
            <div className={styles.answerBox}>
                <div className={styles.answerBoxContainer}>
                    <header>
                        <div className={styles.answerBoxTitle}>
                            <strong>Kpaya</strong>
                            <span>Cerca de 2h</span>
                        </div>
                        <Trash size={20} cursor="pointer" />
                    </header>
                    <div className={styles.answerContent}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis dolor alias adipisci eaque consectetur eum, dicta blanditiis unde repellat, molestias quas porro qui excepturi, repellendus libero aspernatur nesciunt veritatis? Dolores?</p>
                    </div>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir<span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}