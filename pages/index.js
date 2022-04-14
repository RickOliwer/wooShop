import { GET_HEADER } from "../src/queries/Layout/get-header.mjs"
import wp from "../src/wordpress/wp"

export default function Home({data}) {
  console.log('the very data ===>', data);
  return (
    <>
      <main className="">
        <h1 className="text-3xl font-bold text-green-500 underline">
          Hello world!
        </h1>
      </main>
    </>

  )
}

export const getStaticProps = async () => {
  const { data } = await wp(GET_HEADER);

  return {
    props: {
      data: data || {}
    }
  }
}