import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "containers/layout/layout";
import { getProducts } from "helpers/get-products";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta
          name="Description"
          content="Wholesale Trader of Home Improvement Product, kitchen ware product & Home & Kitchen Equipment offered by Amar Enterprises, Delhi"
        />
        <meta
          name="keywords"
          content="Toys Home Improvement Product, kitchen ware product, Home & Kitchen Equipment, Home & Kitchen Appliances, Health & Personal Care Product, Home and Kitchen Accessories, Bathroom things, Amar Enterprises, Delhi"
        />
        <title>
          Amar Enterprises, Delhi - Wholesale Trader of Toys, Home Improvement
          Product and kitchen ware product
        </title>
      </Head>
      <div className="py-35px px-0">
        <h3 className="w-full flex justify-center mb-30px text-24px text-gray-900 text-center font-semibold">
          {id === "string" ? id.toUpperCase() : ""}
          {id}
        </h3>
      </div>
    </Layout>
  );
};

export default Post;
export async function getServerSideProps() {
  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
}