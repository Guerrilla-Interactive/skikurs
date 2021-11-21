import Link from "next/link";
import React from "react";
export default function Button({ text, link }) {
    return (

        <Link as={link} href={link}><button className="px-24 py-4 mt-12 text-white bg-black text-md">{text}</button></Link>

    );
}
