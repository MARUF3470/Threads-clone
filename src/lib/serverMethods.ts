import {headers} from'next/headers'

export const getPost = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/post`, {
        cache: 'no-cache',
        headers: headers()
    })
    const data = await res.json()
    return data.data
}
export const getUserPost = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/user/post`, {
        cache: 'no-cache',
        headers: headers()
    })
    const data = await res.json()
    return data.data
}