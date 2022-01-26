import Head from 'next/head'
import { useTheme } from 'next-themes'
import Image from 'next/image';
import styles from '../styles/Home.module.css'

export default function Header() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="container mx-auto relative border-b mt-3" style={{ maxWidth: '1024px' }}>
            <Head>
                <title>Sankar Raj</title>
                <meta name="description" content="Sankar Raj, A Software Engineer." />
                <link rel="icon" href="/logo.png" />
            </Head>
            <header className="flex justify-between">
                <div>
                    <h1 className={styles.myName}>
                        <a href='/'>S<span className={styles.splChar}>a</span>nkar</a>
                    </h1>
                    <div className={styles.description}>
                        <p className={styles.introTitle}>S<span className={styles.splChar}>o</span>ftware <span className={styles.splChar}>Craftsman</span></p>
                    </div>
                    <p>Passionate about computers and stuff</p>
                </div>
                <Image src="/transparent-coffee.png" className='mr-2 object-cover' alt="Sankar Raj" width={125} height={125} />
            </header>
            <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="w-9 h-9 absolute top-0 right-0 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all float-right"
                onClick={() =>
                    setTheme(theme === 'dark' ? 'light' : 'dark')
                }
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-800 dark:text-gray-200"
                >
                    {theme === 'dark' ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                    )}
                </svg>
            </button>
        </div>
    );
};
