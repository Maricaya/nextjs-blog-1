import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from "react"
import Link from "next/link"
import img from 'assets/image/download.jpg';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>我的博客</title>
      </Head>

      <main className={styles.main}>
        <h1 className="title">
          <Link href="/posts/first-post"><a>link 点击这里</a></Link>
          <hr/>
          <a href="/posts/first-post">a 点击这里</a>
        </h1>
      </main>
      <img src={img} alt=""/>
    </div>
  )
}
