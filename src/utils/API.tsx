import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },
});

export const createUser = async (data: any) => {
    try {
        const res = instance.post('/users', data)
        return res
    } catch (error) {
        //console.log(error)
    }
}

export const authUser = async (data: any) => {
    try {
        const res = instance.post('/users/auth', data)
        return res
    } catch (error) {
       // console.log(error)
    }
}