import HappeningPreview from "../elements/happening/happening-preview";
import React, { useRef, useState } from "react";
import HappeningPreviewTwo from "@components/elements/happening/happening-preview-2";
// Import Swiper React components






export default function MoreHappeningsTwo({ happenings }) {
    return (
        <>
            {happenings.map((happening) => (

                <HappeningPreviewTwo
                    key={happening.slug}
                    title={happening.title}
                    coverImage={happening.coverImage}
                    slug={happening.slug}
                    excerpt={happening.excerpt}
                    time={happening.time}
                    info={happening.infoboxes}
                />

            ))}

        </>



    );
}
