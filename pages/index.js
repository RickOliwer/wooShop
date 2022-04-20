import Products from "../components/products/index.js";
import { getProductsData } from "../src/utils/products.js";

export default function Home({products}) {

  console.log(products);
  return (
    <>
          <div className="">
            <Products products={products} />
          </div>
    </>

  )
}

export const getStaticProps = async () => {
  const {data: products} = await getProductsData()
  return {
    props: {
      products: products || {}
    },
    revalidate: 1,
  }
}