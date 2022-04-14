import Head from "next/head";
import Footer from "./footer";
import Header from "./header";
import staticHeader from "../../data/header-static.json"

const Layout = ({children}) => {
    console.log('staticHeader ===>', staticHeader);
    return (
        <div>
            <Head>

            </Head>
            <div className="grid grid-cols-9">

                <Header className="col-span-1" headerMenu={staticHeader?.headerMenus?.nodes} />
                    <main className="col-span-8 bg-gray-200 h-[200vh]">
                        {children}
                    </main>

            </div>
            <Footer />
        </div>
    );
}
 
export default Layout;