import HandleLink from "../../blocks/functions/handleLink";

const Nav = ({headerMenu}) => {

    return (
        <nav className="fixed h-screen w-[177px]">
            <h1 className="absolute text-gray-200 text-2xl w-[120px] font-semibold top-9 left-2/4 -translate-x-2/4">Hello WooShop!</h1>
            <ul className="absolute text-gray-200 flex flex-col w-[120px] top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 space-y-10">
                {headerMenu?.map((item) => {

                    return (
                        
                        <li key={item?.id} className="inline" >
                            <HandleLink path={item?.path} title={item?.label} classes={`text-red-400 hover:text-blue-300`} />
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}
 
export default Nav;