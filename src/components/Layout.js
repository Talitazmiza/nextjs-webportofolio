import Head from 'next/head'
import Footer from '../sections/Footer';
import Header from '../sections/Header';

const Layout = ({ children }) => {
  return (
      <>
        <Head>
            <title>El Portafolio</title>
        </Head>
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />    
        </div>
    </>
  );
}

export default Layout