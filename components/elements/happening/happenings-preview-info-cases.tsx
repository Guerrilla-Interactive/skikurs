
import React from "react";
export default function HappeningPreviewInfoCases({
    type,
    title,
    date,
    time,
    excerpt }) {

    let targetId = type;


    switch (targetId) {
        case 'when':
            return (
                <span>{time} <br /> <span className="text-2xl font-semibold">{date}</span></span>

            );
        case 'where':

            return (
                <span>{excerpt}</span>
            );
        default:
            return (
                null

            );
    }

}
