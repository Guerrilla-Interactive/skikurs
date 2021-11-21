import InfoboxType from "./infobox-type";

export default function HappeningInfobox({
  type,
  title,
  excerpt,
}) {

  return (
    <div>

      {/* Info Box */}
      <div className="grid justify-start max-w-lg grid-flow-col px-8 py-6 text-white bg-black border border-white rounded-lg border-opacity-30">

        {/* Icon Column */}
        <div className="pr-8 justify-content-center ">
          <InfoboxType type={type} />
        </div>

        {/* Text Column */}
        <div>
          <div className="text-[#aaa]">{title}</div>
          <div>{excerpt}</div>
        </div>
      </div>



    </div>
  );
}
