import Head from "next/head";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;1,200;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.navbar}>
        <h1 className={styles.h1}>My Data Science Notes</h1>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="/">
              <a className={styles.a}>Home</a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/notes">
              <a className={styles.a}>Data Science Notes</a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/topics/udemy">
              <a className={styles.a}>Contact Me</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
