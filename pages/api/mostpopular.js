import data from "./data";
export default function handler(req, res) {
    const {mostpopular} = data;
    if(mostpopular) return res.status(200).json(mostpopular)
    return res.status(404).json({"error":"Data Not found"})
    }
  