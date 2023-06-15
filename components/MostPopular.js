import fetcher from "@/lib/fetcher"
import Image from "next/image"
import Link from "next/link"
import Author from "./_child/Author"
import Error from "./_child/Error"
import Loader from "./_child/Loader"

// import swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const MostPopular = () => {
    const {data,isLoading,isError} = fetcher('api/mostpopular')
    console.log(data);
    if(isLoading) return <Loader></Loader>
    if(isError) return <Error></Error>
  return (
    <section>
        <div className="container mx-auto md:px-20 py-16">
            <h1 className="font-bold text-4xl py-12 text-center tracking-widest">Most Popular</h1>
            {/* swiper */}
            <Swiper
                breakpoints={
                  {
                    640 : {
                        slidesPerView : 2,
                        spaceBetween : 30
                    }
                  }  
                }
            >
            {data.map((value,index)=>(
                <SwiperSlide key={index}><Posts data={value}></Posts></SwiperSlide>
            ))}
            </Swiper>
        </div>
    </section>
  )

}

function Posts({data}){
   const {id,title,subtitle,category,img,published,author} = data;
    return (<>
        <div className="item">
        <div className="Image">
               <Link href={`posts/${id}`}> <Image src={img || "/"} width={600} height={400} alt="{title}"/>
               </Link>
            </div>
        <div className="info flex justify-center flex-col px-4 md:px-0">
                <div className="cat">
                    <Link href={`posts/${id}`}><span className="text-orange-600 hover:text-orange-800">{category || "unknown"}</span></Link>
                    <Link href={`posts/${id}`}><span className="text-gray-800 hover:text-gray-600"> - {published || "unknown"}</span></Link>
                </div>
                <div className="title py-3">
                    <Link href={`posts/${id}`}><span className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600 ">{title}</span></Link>
                    <p className="text-gray-500 py-3">
                    {subtitle}
                    </p>
                    {author ? <Author {...author}></Author> : <></> }
                </div>
            </div>
        </div>
    </>)
}

export default MostPopular