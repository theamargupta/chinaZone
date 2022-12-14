import { useEffect } from "react";
import Head from "next/head";
import Layout from "containers/layout/layout";
import HeroBlock from "containers/hero-block";
import Products from "containers/products";
import CallToAction from "containers/call-to-action";
import HowItWorks from "containers/how-it-works";
import { useRefScroll } from "helpers/use-ref-scroll";
import { useSearch } from "contexts/search/use-search";
import { getProducts } from "helpers/get-products";
import StoryBlock from "containers/story-block";
import { getStories } from "helpers/get-stories";

export default function Home({ products, stories }) {
  const { elRef, scroll } = useRefScroll({
    percentOfElement: 0,
    percentOfContainer: 0,
    offsetPX: -100,
  });
  const { searchTerm } = useSearch();
  useEffect(() => {
    if (searchTerm) return scroll();
  }, [searchTerm]);

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
      <StoryBlock storyItems={stories} />
      <HeroBlock />
      <HowItWorks />
      <Products items={products} ref={elRef} />
      <CallToAction />
    </Layout>
  );
}

export async function getServerSideProps() {
  const products = await getProducts();
  const stories = await getStories();
  return {
    props: {
      products,
      stories,
    },
  };
}
