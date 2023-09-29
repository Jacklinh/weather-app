
import { Link, useLocation } from 'react-router-dom';
import { TbHomeBolt, TbCalendarBolt } from "react-icons/tb";
import styles from '../DefaultLayout/DefaultLayout.module.css'

const Footer = () => {
    const pathname = useLocation().pathname;
    return (
        <div className={styles.nav_links}>
            <ul className={styles.list_link}>
                <li><Link className={`${pathname === '/' ? styles.active : ''}`} to={'/'}><TbHomeBolt /></Link></li>
                <li><Link className={`${pathname === '/forecast5day' ? styles.active : ''}`} to={'/forecast5day'}><TbCalendarBolt /></Link></li>
            </ul>
        </div>
    )
}

export default Footer