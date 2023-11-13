import { headers } from "next/headers"

// export const getPost = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/post`, {
//         cache: 'no-cache',

//         headers: headers()
//     })
//     const data = await res.json()
//     console.log('----->', data);
//     return data.data
// }
// export const getSinglePost = async (id: number) => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/post/${id}`, {
//         cache: 'no-cache',
//         headers: headers()
//     })
//     const data = await res.json()
//     return data.data
// }
// export const getUserPost = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/user/post`, {
//         cache: 'no-cache',
//         headers: headers()
//     })
//     const data = await res.json()
//     return data.data
// }
// export const getUserComment = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/user/comment`, {
//         cache: 'no-cache',
//         headers: headers()
//     })
//     const data = await res.json()
//     return data.data
// }
// export const getUser = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/user`, {
//         cache: 'no-cache',
//         headers: headers()
//     })
//     const data = await res.json()
//     return data.data
// }
// export const getSingleUser = async (id: number) => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/user/${id}`, {
//         cache: 'no-cache',
//         headers: headers()
//     })
//     const data = await res.json()
//     return data.data
// }
// export const getNotifications = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/notification`, {
//         cache: 'no-cache',
//         headers: headers()
//     })
//     const data = await res.json()
//     return data.data
// }
export const exploreUsers = async (query: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/explore?query=${query}`, {
        cache: 'no-cache',
        headers: headers()
    })
    const data = await res.json()
    return data.data
}