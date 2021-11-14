
export default function HappeningInfobox({
  title,
  excerpt,
}) {
  return (
    <div>

      {/* Info Box */}
      <div className="grid justify-start max-w-lg grid-flow-col px-8 py-6 text-white bg-black border border-white rounded-lg border-opacity-30">

        {/* Icon Column */}
        <div className="pr-8 justify-content-center ">

          <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.7998 18.2C1.7998 22.4965 3.50659 26.617 6.54468 29.6551C9.58276 32.6932 13.7033 34.4 17.9998 34.4C22.2963 34.4 26.4168 32.6932 29.4549 29.6551C32.493 26.617 34.1998 22.4965 34.1998 18.2C34.1998 13.9035 32.493 9.78296 29.4549 6.74487C26.4168 3.70678 22.2963 2 17.9998 2C13.7033 2 9.58276 3.70678 6.54468 6.74487C3.50659 9.78296 1.7998 13.9035 1.7998 18.2V18.2Z" stroke="white" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.9998 27.2V20" stroke="white" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.3998 10.9999C14.3998 11.9547 14.7791 12.8704 15.4542 13.5455C16.1293 14.2206 17.045 14.5999 17.9998 14.5999C18.9546 14.5999 19.8702 14.2206 20.5454 13.5455C21.2205 12.8704 21.5998 11.9547 21.5998 10.9999C21.5998 10.0451 21.2205 9.12945 20.5454 8.45432C19.8702 7.77919 18.9546 7.3999 17.9998 7.3999C17.045 7.3999 16.1293 7.77919 15.4542 8.45432C14.7791 9.12945 14.3998 10.0451 14.3998 10.9999Z" fill="white" />
          </svg>

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
