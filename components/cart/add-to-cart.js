import { addToCart } from "../../src/utils/cart";

const AddToCart = ( { product }) => {
    return (
        <button
            className="px-8 py-2 font-semibold text-gray-800 bg-white hover:bg-gray-100"
            onClick={() => addToCart(product?.id ?? 0)}
        >
            Add to cart
        </button>
    );
}
 
export default AddToCart;