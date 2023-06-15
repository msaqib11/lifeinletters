import Link from "next/link";
import { FaFacebookF,FaYoutube,FaTwitter } from "react-icons/fa";
import Logo from "./_child/logo";

const header = () => {
  return (
    <header className="bg-gray-50">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
            <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                <input className="input-text" type="text" placeholder="search.."/>
            </div>
            <div className="shrink w-80 sm:order-2">
              <Link href={"/"}className="font-bold uppercase text-3xl">Life in letters
              </Link>
            </div>
            <div className="w-96 order-3 flex justify-center">
                <div className="flex gap-6 ">
                    <Link href={"/"}><FaFacebookF color="#3b5998"/></Link>
                    <Link href={"/"}><FaYoutube color="#FF0000"/></Link>
                    <Link href={"/"}><FaTwitter color="#00acee"/></Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default header