import Footer from "@/components/Footer";
import Navber from "@/components/Navber";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps, session }) {
  return (
    <>
      <SessionProvider session={session}>
        <Navber />
        <Component {...pageProps} />

        <ToastContainer />
        <Footer />
      </SessionProvider>
    </>
  );
}
