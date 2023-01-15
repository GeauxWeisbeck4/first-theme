import Link from 'next/link'

export default function Header() {
  return (
    <div>
      <div>
        <a href="/" className={styles.logo}>First Theme</a>
      </div>
      <div>
        <nav>
          <Link to="/" className={styles.navlink}>Home</Link>
          <Link to="/about" className={styles.navlink}>About</Link>
          <Link to="/blog" className={styles.navlink}>Blog</Link>
          <Link to="/contact" className={styles.navlink}>Contact</Link>
        </nav>
      </div>
      <div>
        <button to="/shop/get-theme" className={styles.themeButton}>Get Theme</button>
      </div>
    </div>
  )
}