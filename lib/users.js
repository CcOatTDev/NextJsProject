import fetch from 'node-fetch'

export async function getAllUsersData() {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)

    return res.json()
}

export async function getAllUsersDataToPage() {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    //console.log("getAllPostsDataToPage")
    const data = await getAllUsersData()

    return data.map(r => {
        //console.log(r.id)
        return {
            params: {
                id: r.id.toString()
            }
        }
    })
}

export async function getAllUsersDataByID(id) {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    //console.log("getAllPostsDataByID " + id)
    const url = `https://jsonplaceholder.typicode.com/users/${id}`
    //console.log(url)
    const res = await fetch(url)
    //console.log(res)

    return res.json()
}

