import Head from "next/head";
import Footer from "./footer";
import Header from "./header";
import staticHeader from "../../data/header-static.json"
import { AppProvider } from "../context";

const Layout = ({children}) => {

    return (
        <AppProvider>

            <div className="bg-gray-200">
                <Head>

                </Head>
                <Header className="col-span-1" headerMenu={staticHeader?.headerMenus?.nodes} />
                    <main className="col-span-8 px-10 my-10 ">
                        {children}
                    </main>


                <Footer />
            </div>
        </AppProvider>
    );
}
 
export default Layout;