import Image from 'next/image'
import styles from './Header.module.css'

import igniteLogo from '../assets/logo-ignite.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <Image src={igniteLogo} alt='logo' />
        </header>
    )
}