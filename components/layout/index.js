import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

const Layout = ({children}) => {
    return (
        <div>
            <Head>

            </Head>
            <Header />
                <main>
                    {children}
                </main>

            <Footer />
        </div>
    );
}
 
export default Layout;