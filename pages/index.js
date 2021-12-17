import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Projects from './Projects'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rodolfo Rangel</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.imageContainer}>
          <Image src="/picture.svg" alt="Minimalist picture" layout='fill' objectFit="cover"/>
        </div>
        <div className={styles.titles}>
          <div className={styles.myName}>
            RODOLFO RANGEL
          </div>
          <div className={styles.role}>
            Full Stack Developer
          </div>
          <div className={styles.summary}>
            Over the past years, as an Engineer and a Full Stack Developer, I’ve specialized in backend and frontend development of complex and scalable projects, ensuring high standards of quality and abstraction. Whether working for big companies or startups, I’ll always act as a leader, pushing the company, myself, and my team towards success.
            {/* <br/><br/><br/>
            Bellow you'll find some of these works. */}
          </div>
        </div>
      </main>
      <Projects></Projects>
      <footer className={styles.footer}>
        <div>
          <a
            href="https://github.com/Foxrods"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <Image src="/github.svg" alt="GitHub Mark" width={30} height={30} />
            </span>
            <span>
              github.com/Foxrods
            </span>
          </a>
        </div>
        <div>
          <a
            href="https://linkedin.com/in/rodolforangelrodrigues"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <Image src="/linkedin.svg" alt="Linkedin Icon" width={30} height={30} />
            </span>
            <span>
              linkedin.com/in/rodolforangelrodrigues
            </span>
          </a>
        </div>
        <div>
            <span>
              <Image src="/email.svg" alt="email icon" width={30} height={30} />
            </span>
            <span>
              rodolforangel@get.inatel.br
            </span>
        </div>
        
      </footer>
    </div>
  )
}
