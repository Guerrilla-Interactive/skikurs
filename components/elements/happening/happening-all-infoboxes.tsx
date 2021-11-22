import HappeningInfobox from "./happening-infobox";

export default function AllInfoboxes({ happenings }) {
  return (

    <div className="grid content-start gap-4 ">
      {happenings?.map((infobox) => (
        <HappeningInfobox
          key={infobox.key}
          time={infobox.time}
          date={infobox.date}
          type={infobox._type}
          title={infobox.heading}
          excerpt={infobox.excerpt}
        />
      ))}
    </div>
  );
}



