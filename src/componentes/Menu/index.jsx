import React from 'react'
import styles from './Menu.module.scss'
import home from '../../assets/icones/home.png'
import maisCurtidas from '../../assets/icones/mais-curtidas.png'
import maisVistas from '../../assets/icones/mais-vistas.png'
import novas from '../../assets/icones/novas.png'
import surpreendaMe from '../../assets/icones/surpreenda-me.png'


export default function Menu () {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <img src={home} alt="icone home"></img>
                    <a href="#">Início</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisCurtidas} alt="icone mais curtidas"></img>
                    <a href="#">Mais Curtidas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisVistas} alt="icone mais vistas"></img>
                    <a href="#">Mais Vistas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={novas} alt="icone novas"></img>
                    <a href="#">Novas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={surpreendaMe} alt="icone surpreenda-me"></img>
                    <a href="#">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}