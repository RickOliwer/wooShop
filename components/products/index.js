import Product from "./product"

const Products = ({products}) => {
    if(!products){
        return null
    }
    return (
        <div className="grid grid-cols-1 gap-10 overflow-hidden sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">

            {products?.map((product) => {
                
                return(
                    <Product  key={product?.id} product={product} />
                )
            })}


        </div>
    );
}
 
export default Products;