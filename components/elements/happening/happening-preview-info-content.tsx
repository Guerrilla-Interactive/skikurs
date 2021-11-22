import HappeningPreviewInfoCases from "./happenings-preview-info-cases";
import InfoboxType from "./infobox-type";

export default function HappeningPreviewInfoContent({
    type,
    title,
    date,
    time,
    excerpt,
}) {

    return (



        <HappeningPreviewInfoCases type={type} title={title} date={date} time={time} excerpt={excerpt} />


    );
}
