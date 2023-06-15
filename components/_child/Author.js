import Image from "next/image"
import Link from "next/link"

const Author = ({name,img,designation}) => {
  if(!name && !designation) return <></>
  return (
    <div className="Author flex py-5">
        <Image className="rounded-full" src={img || "/"} width={60} height={60} />
        <div className="flex flex-col justify-center px-4">
            <Link href={"/"}><span className="text-md font-bold text-gray-800 hover:text-gray-600 ">{name || "unknown"}</span></Link>
            <span className="text-sm text-gray-500">{designation || "unknown"}</span>
        </div>
    </div>
  )
}

export default Author