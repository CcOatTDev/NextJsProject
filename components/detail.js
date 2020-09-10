

export default function Detail({ userid }) {


      
    return (
        
        <>
            <h1>Detail</h1>
            <h2>{userid}</h2>
        </>
    )
}


export async function getStaticProps({ userid }) {
    // Fetch necessary data for the blog post using params.id
    console.log("ก")
    const userData = await getAllUsersDataByID(userid)
    console.log(userData)
    return {
        props: {
            userData
        }
    }
}  