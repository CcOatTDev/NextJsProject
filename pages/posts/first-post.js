import Link from 'next/link'
import Head from "next/head"
import Layout from "../../components/layout"

export default function FirstPost() {
   return (
      <Layout>
         <Head>
            <title>First Post</title>
         </Head>

         <Link href="/posts/[id]" as="/posts/ssg-ssr">
            <a>First Post</a>
         </Link>
         <br/>
         <Link href="/posts/[id]" as="/posts/pre-rendering">
            <a>Secound Post</a>
         </Link>
      </Layout>
   )
}