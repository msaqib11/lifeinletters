import Link from "next/link";
import { FaFacebookF,FaYoutube,FaTwitter } from "react-icons/fa";
import NewsLetter from "./_child/NewsLetter";
const footer = () => {
    const bg = {
        backgroundImage : "url('/images/footer.png') ",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom left",
     }
  return (
   <footer className="bg-gray-50" style={bg}>
    <NewsLetter/> 
    <div className="container mx-auto flex justify-center py-12">   
        <div className="py-5">
            <div className="flex justify-center gap-6">
                <Link href={"/"}><FaFacebookF color="#888888"/></Link>
                <Link href={"/"}><FaYoutube color="#888888"/></Link>
                <Link href={"/"}><FaTwitter color="#888888"/></Link>
            </div>
            <p className="py-5 text-gray-400">Copyright  ©  {new Date().getFullYear()} All Rights Reserved</p>
            <p className="text-center text-gray-400">Terms And Condition</p>
        </div>
        
    </div>
   </footer>
  )
}

export default footer