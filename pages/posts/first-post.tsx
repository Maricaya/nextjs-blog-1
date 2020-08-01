// 第一篇文章

import React from "react"
import Head from "next/head"
import Link from "next/link"

export default function X() {
  return (
    <>
      <Head>
        <title>第一篇博客</title>
      </Head>
      <div>First Post
        <hr/>
        回到首页
        <br/>
        <a href="/">a 点击这里</a>
        <br/>
        <Link href="/"><a>link 点击这里</a></Link>
      </div>
    </>
  )
}
