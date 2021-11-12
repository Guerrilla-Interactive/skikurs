import Intro from "@components/sections/intro";
import Footer from "../sections/footer";
import Meta from "../meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      {/* <Intro /> */}
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
