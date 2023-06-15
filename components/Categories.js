import Image from "next/image"
import Link from "next/link"
import Author from "./_child/Author"
import fetcher from "@/lib/fetcher"
import Error from "./_child/Error"
import Loader from "./_child/Loader"
const Categories = () => {
    const {data,isLoading,isError} = fetcher('api/mostpopular')
    if(isLoading) return <Loader></Loader>
    if(isError) return <Error></Error>
  return (
    <section>
        <div className="container mx-auto md:px-20 py-16">
            <div className="grid lg:grid-cols-2">
                <div className="item">
                <h1 className="font-bold text-4xl tracking-widest text-center py-12 px-4 md:px-0 md:text-left">
  Business
</h1>

                <div className="flex flex-col gap-6">
                     {data[1]?<Posts data={data[1]}></Posts>:<></>}
                     {data[2]?<Posts data={data[2]}></Posts>:<></>}
                     {data[3]?<Posts data={data[3]}></Posts>:<></>}
                    </div>
                </div>
                <div className="item md:ml-4">
                <h1 className="font-bold text-4xl tracking-widest text-center py-12 px-4 md:px-0 md:text-left">
  Travel
</h1>

                <div className="flex flex-col gap-6">
                    {data[4]?<Posts data={data[4]}></Posts>:<></>}
                    {data[5]?<Posts data={data[5]}></Posts>:<></>}
                    {data[2]?<Posts data={data[2]}></Posts>:<></>}
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

function Posts({data}){
   const {id,title,subtitle,category,img,published,author} = data;
    return (
        <div className="flex flex-col md:flex-row gap-5">
             <div className="image flex flex-col justify-start "> 
            <Link href={`posts/${id}`}> <Image src={img ||"/"} className="rounded" width={450} height={450}/>
               </Link>
                
            </div>
            <div className="info flex justify-center flex-col px-4 md:px-0">
                <div className="cat">
                        <Link href={`posts/${id}`}><span className="text-orange-600 hover:text-orange-800">{category}</span></Link>
                        <Link href={`posts/${id}`}><span className="text-gray-800 hover:text-gray-600"> - {published}</span></Link>
                </div>
                <div className="title py-3">
                        <Link href={`posts/${id}`}><span className="text-xl font-bold text-gray-800 hover:text-gray-600 ">{title}</span></Link>
                  {author ? <Author {...author}></Author> : <></> }
                </div>
            </div>
        </div>
    )
}

export default Categories