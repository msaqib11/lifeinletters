import Author from "@/components/_child/Author";
import Layout from "@/Layout/layout";
import RelatedPosts from "@/components/_child/RelatedPosts";
import Image from "next/image";
import Error from "@/components/_child/Error";
import Loader from "@/components/_child/Loader";
import getPosts from "@/lib/helper";
import Link from "next/link";
import fetcher from "@/lib/fetcher";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";
const Page = ({ fallback }) => {
  const router = useRouter();
  const { blogId } = router.query;
  const { data, isLoading, isError } = fetcher(`api/posts/${blogId}`);
  if (isLoading) return <Loader></Loader>;
  if (isError) return <Error></Error>;

  return (
    <SWRConfig value={{ fallback }}>
      <Blog {...data} />
    </SWRConfig>
  );
};

const Blog = ({
  title,
  subtitle,
  category,
  img,
  description,
  published,
  author,
}) => {
  return (
    <Layout>
      <section className="container mx-auto md:px-20 py-16 w-3/4">
        <div className="flex flex-col items-center">
          {author ? <Author></Author> : <></>}
          <div className="cat">
            <Link href={"/"}>
              <span className="text-orange-600 hover:text-orange-800">
                {category || "unknown"}
              </span>
            </Link>
            <Link href={"/"}>
              <span className="text-gray-800 hover:text-gray-600">
                {" "}
                - {published || "unknown"}
              </span>
            </Link>
          </div>
        </div>
        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">
            {title || "unknown"}
          </h1>
          <p className="text-gray-500 text-xl text-center">
            {subtitle || "unknown"}
          </p>
          <div className="image py-10">
            <Image src={img || "/"} width={1000} height={200} />
          </div>
          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            {description || "unknown"}
          </div>
        </div>
        <RelatedPosts></RelatedPosts>
      </section>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const posts = await getPosts(params.blogId);

  return {
    props: {
      fallback: {
        "api/posts": posts,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map((value) => {
    return {
      params: { blogId: value.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export default Page;
