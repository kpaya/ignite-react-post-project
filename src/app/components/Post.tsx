"use client"
import { AvatarImage } from "./AvatarImage";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { IComment} from "../page"
import { FormEventHandler, useState } from "react";

export function Post({author, avatarUrl, role, comment, createdAt, commentList}: {author: string, avatarUrl: string, role: string, comment: string, createdAt: string, commentList: Array<IComment>}) {
    const [textAreaField, setTextAreaField] = useState("");
    const [commentListState, setCommentListState] = useState(commentList);

    function handleCommentSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();

        let commentField = event.target.comment;

        if (commentField.value === "") {
            return;
        }

        setCommentListState([...commentListState, {
            id: commentListState.length + 1,
            author: "Kpaya",
            avatarUrl: "https://github.com/kpaya.png",
            role: "Desenvolvedor Full-stack",
            comment: textAreaField,
            createdAt: "2021-08-13 15:33:00"
        }]);
        setTextAreaField("");
    }

    function handleNewCommentText(){
        setTextAreaField(event.target.value);
    }

    function deleteComment(commentId: number) {
        const newCommentList = commentListState.filter(comment => {
            return comment.id !== commentId;
        })
        setCommentListState(newCommentList);
    }


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

                <form className={styles.commentForm} onSubmit={handleCommentSubmit}>
                    <strong>Deixe seu feedback</strong>

                    <textarea value={textAreaField} onChange={handleNewCommentText} name="comment" placeholder="Deixe seu comentário"></textarea>

                    <footer>
                        <button type="submit">Comentar</button>
                    </footer>
                </form>
                
                {commentListState.map(comment => {
                    // eslint-disable-next-line react/jsx-key
                    return <Comment id={comment.id} author={comment.author} avatarUrl={comment.avatarUrl} content={comment.comment} onDeleteComment={deleteComment}/>
                })}
                
            </article>
        </>
    )
}