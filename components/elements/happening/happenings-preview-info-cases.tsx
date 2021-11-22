
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
                <div className="timeAndDate">{time} <br /> <span className="text-2xl font-semibold">{date}</span></div>

            );
        case 'where':

            return (
                <div className="where">{excerpt}</div>
            );
        default:
            return (
                null

            );
    }

}
