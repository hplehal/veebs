import Link from "next/link";
import Image from 'next/image'
import styles from './Header.module.css'

export default function Header() {
    return(
      <header>
        <nav className= {styles.nav}>
            <h1 className={styles.nav_header}>
                <Link href={'/'}>
                    <h1>Veebs</h1>
                </Link>
            </h1>
            <ul className={styles.nav_menu}>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/dashboard'}>Dashboard</Link>
                </li>
                <li>
                    <Link href={'/teams'}>Teams</Link>
                </li>
            </ul>
        </nav>  
      </header>  
    );
}