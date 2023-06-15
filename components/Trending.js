import Image from "next/image"
import Link from "next/link"
import Author from "./_child/Author"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Autoplay} from 'swiper';
import fetcher from "@/lib/fetcher"

import Error from "./_child/Error"
import Loader from "./_child/Loader"

// Import Swiper styles
import 'swiper/css';

const Trending = () => {
    SwiperCore.use([
        Autoplay
    ])

    const {data,isLoading,isError} = fetcher('api/trending')
    if(isLoading) return <Loader></Loader>
    if(isError) return <Error></Error>
  return (
    <section className="py-16">
        <div className="container mx-auto md:px-20">
            <h1 className="font-bold text-4xl pb-12 text-center tracking-widest">
                Trending
            </h1>
            <Swiper
             
                slidesPerView={1}
                loop = {true}
                autoplay ={{
                    delay:2000
                }} 
              
>
               {
               data.map((value,index)=>(
                <SwiperSlide key={index}> <Slide data={value}></Slide> </SwiperSlide>
               ))
               }
            
            </Swiper>
        
        </div>
    </section>
  )
}

export default Trending

function Slide({data}){
   const {id,title,subtitle,category,img,published,author} = data; 
    return(
        <div className="grid md:grid-cols-2">
            <div className="Image">
               <Link href={`posts/${id}`}> <Image src={ img || "/"} width={600} height={600}/>
               </Link>
            </div>
            <div className="info flex justify-center flex-col px-4 md:px-0">
                <div className="cat">
                    <Link href={`posts/${id}`}><span className="text-orange-600 hover:text-orange-800">{category}</span></Link>
                    <Link href={`posts/${id}`}><span className="text-gray-800 hover:text-gray-600"> - {published}</span></Link>
                </div>
                <div className="title py-3">
                    <Link href={`posts/${id}`}><span className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">{title}</span></Link>
                    <p className="text-gray-500 py-3">
                    {subtitle}
                    </p>
                    {author ? <Author {...author}></Author> : <></> }
                </div>
            </div>
        </div>
    )
}