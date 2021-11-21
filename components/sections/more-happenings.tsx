import HappeningPreview from "../elements/happening/happening-preview";
import React, { useRef, useState } from "react";
import useEmblaCarousel from 'embla-carousel-react';



export default function MoreHappenings({ happenings }) {
  const [emblaRef] = useEmblaCarousel()

  return (
    <section className="min-h-[45rem] h-[35rem] pb-[3rem] ">



      {happenings.map((happening) => (


        <HappeningPreview
          key={happening.slug}
          title={happening.title}
          coverImage={happening.coverImage}
          slug={happening.slug}
          excerpt={happening.excerpt}
        />

      ))}


      <div className="ml-[7.5vw]">Se alle arrangementer</div>

    </section>
  );
}
