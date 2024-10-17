import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
} from 'react-icons/fa'
import Link from "next/link";

export default function Footer() {
    return(
      <footer className="footer">
        <ul className="footer-menu">
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
        <ul className="social-links">
            <li>
                <a href="https://www.facebook.com/profile.php?id=61553081158465" target="_blank">
                    <FaFacebookF />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/titoscourts" target="_blank">
                    <FaInstagram />
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/@titoscourts" target="_blank">
                    <FaYoutube />
                </a>
            </li>
        </ul>
      </footer>  
    );
}