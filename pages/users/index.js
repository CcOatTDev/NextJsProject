import { getAllUsersData } from '../../lib/users'
import utilStyles from '../../styles/utils.module.css'
import Link from "next/link"
import Layout, { siteTitle } from '../../components/layout'
import React, { useState, useContext } from "react"
import Detail from '../../components/detail'

export default function Users({ userDatas }) {
    const [userId, setUserId] = useState(0);

    const handelClick = (value) => {
        setUserId(value)
    }

    return (
        <Layout>
            <div>
                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <h2 className={utilStyles.headingLg}>Blog</h2>
                    <ul className={utilStyles.list}>
                        {userDatas.map(user => (
                            <li className={utilStyles.listItem} key={user.id}>
                                <Link href="/users/[id]" as={`/users/${user.id}`}>
                                    <a>{user.name}</a>
                                </Link>
                                <br />
                                <small className={utilStyles.lightText}>
                                    <a onClick={() => handelClick(user.id)}>{user.name}</a>
                                </small>
                            </li>
                        ))}
                    </ul>
                </section>
                <section>
                    {userId != 0 ? (<Detail userid={userId} />) : (<></>)}
                </section>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const userDatas = await getAllUsersData()
    return {
        props: {
            userDatas
        }
    }

}
