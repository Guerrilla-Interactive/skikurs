import Intro from "@components/sections/intro";
import Footer from "../sections/footer";
import Meta from "../meta";
import Header from "@components/sections/header";

export default function Layout({ headerData, preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Header headerData={headerData} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
