import Link from "next/link";
import { CartShoppingSolid } from "../../icons";

const Nav = ({headerMenu}) => {

    return (
        <nav className="h-[77px] w-[100%]">
            <div className="h-[77px] w-full fixed z-10 bg-gray-800 flex justify-between items-center px-10">

                <h1 className="text-gray-200">Hello WooShop!</h1>
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
                    <CartShoppingSolid className="fill-white w-[30px]" />
                </div>
            </div>
        </nav>
    );
}
 
export default Nav;