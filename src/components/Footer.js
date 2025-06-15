// components/Footer.js
import styles from '../styles/Navbar.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} MAO KIMHUONG. All rights reserved.</p>
    </footer>
  );
}
