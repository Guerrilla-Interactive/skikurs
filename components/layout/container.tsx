import Header from "@components/sections/header";

export default function Container({ children }) {
  return <div className="container px-5 mx-auto">
    <Header />
    {children}</div>;
}
