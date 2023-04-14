import axios from "axios";

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_SERVER_URL,
    timeout: 5000,
    headers: { "X-Custom-Header": "foobar" },
});

const client = axios.create({
    baseURL: process.env.BASE_SERVER_URL,
    timeout: 5000,
    headers: { "X-Custom-Header": "foobar" },
});

export const createUser = async (data: any) => {
    try {
        const res = await instance.post('/users', data) 
        return res
    } catch (error) {
        //console.log(error)
    }
}

export const authUser = async (data: any) => {
    try {
        const res = await instance.post('/users/auth', data)
        return res
    } catch (error) {
        console.log(error)
    }
}

export const createPost = async (data: any) => {
    try {
        const res = await client.post('/posts', data)
        return res
    } catch (error) {
        console.log(error)
    }
}
export const getPosts = async () => {
    try {
        const res = await client.get('/posts')
        return res
    } catch (error) {
        console.log(error)
    }
}