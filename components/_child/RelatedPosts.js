import fetcher from "@/lib/fetcher"
import Image from "next/image"
import Link from "next/link"
import Author from "./Author"
import Error from '../_child/Error'
import Loader from '../_child/Loader'
const RelatedPosts = () => {
    const {data,isLoading,isError} = fetcher('api/posts')
    if(isLoading) return <Loader></Loader>
    if(isError) return <Error></Error>
  return (
   <section className="py-20 ">
        <h1 className="font-bold text-3xl md:text-5xl tracking-widest py-10 text-center">Related Posts</h1>
        <div className="flex flex-col gap-10">
            {data.map((value,index)=>(
                <Posts key={index} data={value}> </Posts> 
            ))}
        </div>
   </section>
  )
}


function Posts({data}){
    const {id,title,category,img,published,author} = data; 
 
     return (
         <div className="flex md:flex-row flex-col md:py-4  gap-5 mx-auto">
             <div className="image flex justify-center ">
                 <Link href={`${id}`}>
                     <Image src={img ||"/"} className="rounded" width={280} height={280}/>
                 </Link>
             </div>
             <div className="info flex flex-col justify-center">
                 <div className="cat">
                     <Link href={`${id}`}>
                         <span className="text-orange-600 hover:text-orange-800">{category || "unknown"}</span>
                     </Link>
                     <Link href={`${id}`}>
                         <span className="text-gray-800 hover:text-gray-600"> - {published || "unknown"}</span>
                     </Link>
                 </div>
                 <div className="title py-3">
                     <Link href={`${id}`}>
                         <span className="text-xl font-bold text-gray-800 hover:text-gray-600 ">{title || "unknown"}</span>
                     </Link>
                     {author ? <Author {...author}></Author> : <></> }
                 </div>
             </div>
         </div>
     )
 }
 

export default RelatedPosts