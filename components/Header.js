import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.navbar}>
      <a href="/" className={styles.logo}>First Theme</a>
        <nav className={styles.navlinks}>
          <Link href="/" className={styles.navitem}>Home</Link>
          <Link href="/about" className={styles.navitem}>About</Link>
          <Link href="/blog" className={styles.navitem}>Blog</Link>
          <Link href="/contact" className={styles.navitem}>Contact</Link>
        </nav>
        <div>
          <button href="/shop/get-theme" className={styles.themeButton}>Get Theme</button>
        </div>
    </div>
  )
  
}