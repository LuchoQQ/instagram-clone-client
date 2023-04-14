export interface Session {
    id: string,
    username: string,
    firstName: string,
    email: string,
    avatar: string
}
export interface Post {
    _id: string,
    description: string,
    post_owner: string,
    image: string
    likes: []
    createdAt: string
}

export interface User {
    _id: string,
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    avatar: string,
    createdAt: string,
    updatedAt: string
}