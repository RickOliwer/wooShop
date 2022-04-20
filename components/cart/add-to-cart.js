import { addToCart } from "../../src/utils/cart";

const AddToCart = ( { product }) => {
    return (
        <button
            className="px-4 py-2 font-semibold text-gray-800 duration-500 border border-gray-400 rounded shadow hover:bg-gray-100"
            onClick={() => addToCart(product?.id ?? 0)}
        >
            Add to cart
        </button>
    );
}
 
export default AddToCart;