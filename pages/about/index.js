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
    <main>
      <div>
        <h2>About Us</h2>
        <p>Black Orchid Research is founded on the idea that data and story-telling should complement one
        another in solving problems. These problems may be organizational or more global. Our data scientists
        use data to drive insight for organizations and policy. The company combines analytical tools of data
        science with an applied understanding of social sciences. These analytics give insight with historical,
        political, economic, and behavioral contexts. The research and analytics done at Black Orchid serve to
        better understand dynamic multi-scale problems. We study the past and present to better understand
        the future, be it for an organization or population. We present findings in actionable ways that move the
        solution past theory to predictive and tangible.</p>
      </div>
    </main>
    </>
  )
}
