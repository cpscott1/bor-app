import Image from 'next/image'
import styles from './about.module.css'

export default function About() {
  return (
    <>
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image src="/images/Horizontal_Lockup_Dark.png" width={250} height={50} />
        </div>
        <div className={styles.linkContainer}>
        <ul className={styles.links}>
          <li className={styles.item}>
            <a href="/">Home</a>
          </li>
          <li className={styles.item}>
            <a href="#">About</a>
          </li>
          <li className={styles.item}>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        </div>
      </nav>
    </header>
    </>
  )
}
