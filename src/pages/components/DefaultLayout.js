import Navbar from "./Navbar";
import Footer from "./Footer";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}