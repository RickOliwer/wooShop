import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../../context";
import { CartShoppingSolid } from "../../icons";

const Nav = ({headerMenu}) => {
    const [ cart, setCart ] = useContext( AppContext)
    return (
        <nav className="h-[77px] w-[100%]">
            <div className="h-[77px] w-full fixed z-10 bg-gray-800 flex justify-between items-center px-10">

                <h1 className="text-gray-200 logo">Hello WooShop!</h1>
                <div className="flex space-x-4 ">
                    {headerMenu?.map((item) => {

                        return (
                            
                            <Link key={item?.id} href={item?.path}>
                                <a className="h-[40px] text-gray-200 flex items-center">
                                        {item?.label}
                                </a>
                            </Link>
                        )
                    })}
                    <Link href="/cart">
                        <a className="flex mt-4 mr-10 text-gray-200 lg:inline-block lg:mt-0 hover:text-gray-400">
                            <span className="relative flex w-full h-full">
                                <CartShoppingSolid className="fill-white w-[25px]" />
                                {cart?.totalQty ? (
                                    <span className="absolute w-[1.48rem] h-[1.48rem] bg-red-700 rounded-full -top-1 -right-5 flex items-center justify-center"><span className="text-xs text-gray-200">{cart?.totalQty}</span></span>

                                ) : null}
                            </span>
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
 
export default Nav;