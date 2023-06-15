import fetcher from "@/lib/fetcher"
import Image from "next/image"
import Link from "next/link"
import Author from "./_child/Author"
import Error from "./_child/Error"
import Loader from "./_child/Loader"
const LatestPost = () => {
    const {data,isLoading,isError} = fetcher('api/posts')
    if(isLoading) return <Loader></Loader>
    if(isError) return <Error></Error>
    console.log(data);
    return (
    <div className="container mx-auto md:px-20 py-10">
        <h1 className="font-bold text-4xl py-12 text-center tracking-widest">Latest Post</h1>
        {/* grids */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
           {data.map((value,index)=>(
                <Posts data = {value} key={index}></Posts>
           ))}
        </div>
    </div>
  )
}


function Posts({data}){

   const {id,title,subtitle,category,img,published,author} = data; 
    return (<>
        <div className="item">
        <div className="Image">
               <Link href={`posts/${id}`}>  <Image src={img || "/"} className="rounded" width={500} height={350}/>
               </Link>
            </div>
        <div className="info flex justify-center flex-col px-4 md:px-0">
                <div className="cat">
                    <Link href={`posts/${id}`}><span className="text-orange-600 hover:text-orange-800">{category || "unknown"}</span></Link>
                    <Link href={`posts/${id}`}><span className="text-gray-800 hover:text-gray-600"> - {published || "unknown"}</span></Link>
                </div>
                <div className="title py-3">
                    <Link href={`posts/${id}`}><span className="text-xl font-bold text-gray-800 hover:text-gray-600 ">{title || "unknown"}</span></Link>
                    <p className="text-gray-500 py-3">
                    {subtitle || "unknown" }
                    </p>
                    {author ? <Author {...author}></Author> : <></> }
                </div>
            </div>
        </div>
    </>)
}

export default LatestPost