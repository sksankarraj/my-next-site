import Image from 'next/image';


export default function Sidebar (props) {
    <section className={`${styles.sidebar} dark:bg-gray-800`}>
    <div className={styles.avatar}>
      <Image src="/avatar.jpg" alt="Sankar Raj" width={200} height={200} />
    </div>
    <h1 className={styles.myName}>
      S<span className={styles.splChar}>a</span>nkar
    </h1>
    <div className={styles.description}>
      <p className={styles.introTitle}>Software <span className={styles.splChar}>Craftsman</span></p>
      <p className={styles.introMe}>Passionate. Creative. Love what I do.</p>
    </div>
    <div className={styles.social}>
      <a href="https://twitter.com/sksankarraj" target="_blank" rel="noopener noreferrer">
        <Image src="/twitter.svg" alt="Twitter" width={200} height={200} />
      </a>
      <a href="https://www.linkedin.com/in/sksankarraj/" target="_blank" rel="noopener noreferrer">
        <Image src="/linkedin.svg" alt="LinkedIn" width={200} height={200} />
      </a>
      <a href="https://github.com/sksankarraj" target="_blank" rel="noopener noreferrer">
        <Image src="/github.svg" alt="GitHub" width={200} height={200} />
      </a>
    </div>
  </section>
}