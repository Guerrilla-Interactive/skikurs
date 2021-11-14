import HappeningInfobox from "./happening-infobox";

export default function AllInfoboxes({ happenings }) {
  return (

    <div className="grid content-start gap-4 ">
      {happenings.infoboxes?.map((infobox) => (
        <HappeningInfobox
          key={infobox.key}
          title={infobox.heading}
          excerpt={infobox.excerpt}
        />
      ))}
    </div>
  );
}



