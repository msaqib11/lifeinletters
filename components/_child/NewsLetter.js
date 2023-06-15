const NewsLetter = () => {
   
  return (
    <section className="bg-gray-50 mt-20">
        <div className="container mx-auto md:px-20 py-16 text-center">
            <div className="font-bold text-3xl">Subscribe NewsLetter</div>
        <div className="py-4">
            <input type="text" className="shadow border rounded w-9/12 py-3 px-3 text-gray-700 focus:outline-none " placeholder="Enter your Email"></input>
        </div>
        <button className="bg-orange-400 px-20 py-3 text-gray-50 text-xl rounded-full">
            Subscribe
        </button>
        </div>
    </section>
  )
}

export default NewsLetter