import Footer from "@/components/Footer";
import Navber from "@/components/Navber";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navber/>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}


