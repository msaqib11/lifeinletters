import  useSWR from "swr"

const response = (...args) => fetch(...args).then(res => res.json())
const baseURL = 'http://localhost:3000/';
const fetcher = (endPoint) => {
 const {data,error} = useSWR(`${baseURL}${endPoint}`,response)
return {
    data,
    isLoading : !error && !data,
    isError : error
}
}

export default fetcher