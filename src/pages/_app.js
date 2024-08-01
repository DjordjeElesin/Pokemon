import "@/styles/globals.css";
import DefaultLayout from "./components/DefaultLayout";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return getLayout(<Component {...pageProps} />);
  
}
