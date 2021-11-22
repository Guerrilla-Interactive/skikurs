import InfoboxType from "./infobox-type";
import InfoboxContent from "./infobox-content";

export default function HappeningInfobox({
  type,
  title,
  date,
  time,
  excerpt,
}) {

  return (

    <InfoboxContent type={type} title={title} date={date} time={time} excerpt={excerpt} />

  );
}
