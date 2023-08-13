import styles from "./AvatarImage.module.css";

export function AvatarImage({ src }: { src: string }) {
    return (
        <>
            <img className={styles.avatar} src={src} />
        </>
    )
}