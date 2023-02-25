import styles from "../styles/Home.module.css";
import { Inter } from '@next/font/google';
import Snowimg from 'public/snow.svg';

const inter = Inter({ subsets: ['latin'] })
export default function Card(){

return(
    <div className={styles.grid}>
    <a
      href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
     
     <img src ={Snowimg} alt="My Happy SVG"/>
      <h2 className={inter.className}>
       Snow <span>-&gt;</span>
      </h2>

      <p className={inter.className}>
       Frontend Engineer
      </p>
    </a>

    <a
      href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={inter.className}>
        Nanako <span>-&gt;</span>
      </h2>
      <p className={inter.className}>
        Waffle college student
      </p>
    </a>

    <a
      href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={inter.className}>
        Marimo <span>-&gt;</span>
      </h2>
      <p className={inter.className}>
        Cat
      </p>
    </a>

    <a
      href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={inter.className}>
        Aimi <span>-&gt;</span>
      </h2>
      <p className={inter.className}>
       Dog
      </p>
    </a>
  </div>
);
}