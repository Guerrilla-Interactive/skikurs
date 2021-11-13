import Header from "@components/sections/header";

export default function Container({ children }) {
  return <div className="w-[85vw] 9px-5 mx-auto">
    <Header />
    {children}</div>;
}
