import styles from "./AvatarImage.module.css"
import Image from 'next/image'

export function AvatarImage({ src, widthSize = "3rem", heightSize = "3rem" }: { src: string, widthSize: string, heightSize: string }) {
    return (
        <>
            <img className={styles.avatar} style={{ width: widthSize, height: heightSize }} src={src} />
        </>
    )
}