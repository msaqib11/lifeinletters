const baseUrl = 'http://localhost:3000/api/posts'
    export default async function getPosts(id){
    const res = await fetch(`${baseUrl}`)
    const posts = await res.json()
    if(id){
        return posts.find(value => value.id==id)
    }
    return posts
}