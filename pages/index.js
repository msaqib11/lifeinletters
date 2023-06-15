import { Inter } from 'next/font/google'
import  Layout  from '@/Layout/layout'

//components
import Trending from '@/components/Trending'
import LatestPost from '@/components/LatestPost'
import MostPopular from '@/components/MostPopular'
import Categories from '@/components/Categories'

export default function Home() {
  return (
   <div>
    <Layout>
      <Trending></Trending>
      <LatestPost></LatestPost>
      <MostPopular></MostPopular>
      <Categories></Categories>
    </Layout>
   </div>
  )
}
