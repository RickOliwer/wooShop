import Products from "../components/products/index.js";
import { getProductsData } from "../src/utils/products.js";

export default function Home({products}) {

  return (
    <>
      <main className="">
        <h1 className="text-3xl font-bold text-green-500 underline">
        </h1>
          <div className="p-4 mx-auto">
            <Products products={products} />
          </div>
      </main>
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