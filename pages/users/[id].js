import Layout from "../../components/layout"
import { getAllUsersDataByID, getAllUsersDataToPage } from '../../lib/users'
import Head from "next/head";
import Date from "../../components/date"
import utilStyles from '../../styles/utils.module.css'

export default function Post({ userData }) {
    return (
        <Layout>
            <Head>
                <title>{userData.name}</title>
            </Head>
            <article>
                <br />
                <h1 className={utilStyles.headingXl}>{userData.name}</h1>
                <br />
                {userData.username} {userData.email}
                <br />
                <div className={utilStyles.lightText}>
                    {userData.address.street} {userData.address.suite} {userData.address.city}
                </div>
                <br />

            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = await getAllUsersDataToPage()

   // console.log(paths)
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const userData = await getAllUsersDataByID(params.id)
    //console.log(userData)
    return {
        props: {
            userData
        }
    }
}