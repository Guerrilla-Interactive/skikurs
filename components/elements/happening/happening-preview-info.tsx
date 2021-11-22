import HappeningPreviewInfoContent from "./happening-preview-info-content";

export default function HappeningPreviewInfo({ info }) {
    return (
        <div id="previewGrid" className="grid content-start gap-4 ">
            {info?.map((infoLine) => (
                <HappeningPreviewInfoContent
                    key={infoLine.key}
                    time={infoLine.time}
                    date={infoLine.date}
                    type={infoLine._type}
                    title={infoLine.heading}
                    excerpt={infoLine.excerpt}
                />
            ))}
        </div>
    );
}



