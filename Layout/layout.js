import Header from "@/components/header"
import Footer from "@/components/footer"
import Head from "next/head"
const layout = ({children}) => {
  return (
    <div className="antialiased">
        <Head>
            <title>Life In Letters</title>
        </Head>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
    </div>
  )
}

export default layout
