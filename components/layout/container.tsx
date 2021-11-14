import Header from "@components/sections/header";

export default function Container({ children }) {
  return <div className="mx-auto  9px-5">
    <Header />
    {children}</div>;
}
