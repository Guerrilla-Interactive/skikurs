import Header from "@components/sections/header";

export default function Container({ children }) {
  return <div className="mx-auto ">
    <Header />
    {children}</div>;
}
