import Image from "next/image"

const Error = () => {
  return (
    <div className="py-10">
        <Image src={'/images/notfound.gif'} width={600} height={600} className="mx-auto"></Image>
    </div>

  )
}

export default Error