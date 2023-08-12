"use client"

import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';

export function Sidebar() {
    return (
        <>
            <aside className={styles.sidebar}>
                <img className={styles.cover} src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40" />


                <div className={styles.profile}>
                    <img className={styles.avatar} src="https://github.com/kpaya.png" />
                    <strong>Kpaya</strong>
                    <span>Software Engineering</span>
                </div>

                <footer>
                    <a href="#">
                        <PencilLine size={20} />
                        Editar Perfil
                    </a>
                </footer>
            </aside>
        </>
    )
}