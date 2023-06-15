import data from "../data";

export default function handler(req, res) {
    const {blogId} = req.query;
    const {posts} = data;
    if(blogId){
        const post = posts.find(value => value.id == blogId)
        return res.status(200).json(post)
    }
    return res.status(404).json({"error":"Data Not found"})
    }
  