import { isEmpty } from "lodash";
import { useContext, useState } from "react";
import { addToCart } from "../../src/utils/cart";
import { AppContext } from "../context";
import cx from "classnames"
import Link from "next/link";

const AddToCart = ( { product }) => {
    const [ cart, setCart ] = useContext( AppContext )
    const [ isAddedToCart, setIsAddedToCart ] = useState(false)
    const [ loading, setLoading ] = useState(false)
    const addToCartBtnClasses = cx(
        'px-4 py-2 font-semibold text-gray-800 duration-500 border border-gray-400 rounded shadow',
        {
            'hover:bg-gray-100': ! loading,
            'bg-gray-200': loading,
        },
    )

    if(isEmpty(product)){
        return null
    }

    return (
        <>
            <button
                className="px-4 py-2 font-semibold text-gray-800 duration-500 border border-gray-400 rounded shadow hover:bg-gray-100"
                onClick={() => addToCart(product?.id ?? 0, 1, setCart, setIsAddedToCart, setLoading)}
                disabled={loading}
            >
                {loading ? 'Adding...' : 'Add to cart'}
            </button>
            { isAddedToCart && ! loading ? (
                <Link href="/cart">
                    <a className="px-4 ml-4 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow hover:bg-gray-100 py-11px">
                        View cart
                    </a>
                </Link>
            ) : null}
        </>
    );
}
 
export default AddToCart;