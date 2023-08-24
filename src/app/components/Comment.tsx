"use client"
import { Trash, ThumbsUp } from "phosphor-react";
import { AvatarImage } from "./AvatarImage";
import styles from "./Comment.module.css";

export function Comment({ id, author, content, avatarUrl, onDeleteComment }: { id: number, author: string, content: string, avatarUrl: string, onDeleteComment: Function }) {
    
    function handleDeleteComment() {
        onDeleteComment(id);
    }

    return (
        <div className={styles.comment}>
            <AvatarImage src={avatarUrl} heightSize="2rem" widthSize="2rem" />
            <div className={styles.answerBox}>
                <div className={styles.answerBoxContainer}>
                    <header>
                        <div className={styles.answerBoxTitle}>
                            <strong>{author}</strong>
                            <span>Cerca de 2h</span>
                        </div>
                        <Trash size={20} cursor="pointer" onClick={handleDeleteComment} />
                    </header>
                    <div className={styles.answerContent}>
                        <p>{content}</p>
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