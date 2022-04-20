import { getSession, storeSession } from './session';
import { getApiCartConfig } from './api';
import axios from 'axios';
import { CART_ENDPOINT } from '../constants/endpoint';
import { isEmpty, isArray } from 'lodash';

/**
 * Add To Cart Request Handler.
 *
 * @param {int} productId Product Id.
 * @param {int} qty Product Quantity.
 * @param {Function} setCart Sets The New Cart Value
 * @param {Function} setIsAddedToCart Sets A Boolean Value If Product Is Added To Cart.
 * @param {Function} setLoading Sets A Boolean Value For Loading State.
 */
export const addToCart = ( productId, qty = 1, setCart, setIsAddedToCart, setLoading) => {
	const storedSession = getSession();
	const addOrViewCartConfig = getApiCartConfig();
	setLoading(true)
		
	axios.post( CART_ENDPOINT, {
			product_id: productId,
			quantity: qty,
		},
		addOrViewCartConfig,
	)
		.then( ( res ) => {
			
			if ( isEmpty( storedSession ) ) {
				storeSession( res?.headers?.[ 'x-wc-session' ] );
			}
			setIsAddedToCart(true)
			setLoading(false)
			viewCart(setCart);
		} )
		.catch( err => {
			setLoading(false)
			console.log( 'err', err );
		} );
};

/**
 * View Cart Request Handler
 *
 * @param {Function} setCart Set Cart Function.
 * @param {Function} setProcessing Set Processing Function.
 */
 export const viewCart = (setCart) => {
	
	const addOrViewCartConfig = getApiCartConfig();
	
	axios.get( CART_ENDPOINT, addOrViewCartConfig )
		.then( ( res ) => {
            console.log('res', res);
		} )
		.catch( err => {
            console.log('err', err);
		} );
};


/**
 * Calculate Cart Qty And Price.
 *
 * @param cartItems
 * @return {{totalQty: number, totalPrice: number}}
 */
 const calculateCartQtyAndPrice = ( cartItems ) => {
	const qtyAndPrice = {
		totalQty: 0,
		totalPrice: 0,
	}
	
	if ( !isArray(cartItems) || !cartItems?.length ) {
		return qtyAndPrice;
	}
	
	cartItems.forEach( (item, index) => {
		qtyAndPrice.totalQty += item?.quantity ?? 0;
		qtyAndPrice.totalPrice += item?.line_total ?? 0;
	} )
	
	return qtyAndPrice;
}

