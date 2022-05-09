import Link from "next/link";
import Image from "../blocks/functions/handleImage";
import { sanitize } from "../../src/utils/miscellaneous";
import AddToCart from "../cart/add-to-cart";

const Product = ( { product } ) => {
    const img = product?.images?.[0] ?? {};
    const productType = product?.type ?? '';
    return (
        <div className="overflow-hidden">

        <Link href={`/${product?.slug}`}>
            <a>
                <Image 
                    sourceUrl={img?.src ?? ''}
                    altText={img?.alt ?? ''}
                    title={ product?.name ?? ''}
                    width="380"
                    height="380"
                />
                <h2 className="font-bold uppercase my-2 tracking-0.5px">{ product?.name ?? '' }</h2>
                <div className="mb-4" dangerouslySetInnerHTML={{ __html: sanitize( product?.price_html ?? '' ) }}/>
                <div>hell id:{product?.id}</div>
                <div>stock_quantity:{product?.stock_quantity}</div>
            </a>
        </Link>

        { 'simple'  === productType ? <AddToCart product={product} /> : null}
    </div>
    );
}
 
export default Product;