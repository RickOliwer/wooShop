import Product from "./product"

const Products = ({products}) => {
    if(!products){
        return null
    }
    return (
        <div className="flex flex-wrap -mx-2 overflow-hidden">

            {products?.map((product) => {
                
                return(
                    <Product  key={product?.id} product={product} />
                )
            })}


        </div>
    );
}
 
export default Products;