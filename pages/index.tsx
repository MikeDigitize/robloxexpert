import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Roblox Expert - A website by Jenson Fisher</title>
        <meta name="description" content="A website to learn how to become an expert with Roblox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/roblox-expert-logo-sm.jpg"
            alt="Roblox Expert Logo"
            width={500}
            height={500}
            priority
          />
        </div>

				<h1 className={styles.title}>Welcome to Roblox Expert!!</h1>

      </main>
    </>
  )
}
