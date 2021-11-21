
import React from "react";
export default function InfoboxType({ type }) {
    let targetId = type;
    switch (targetId) {
        case 'when':
            return (
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.80005 18C1.80005 22.2966 3.50683 26.4171 6.54492 29.4552C9.58301 32.4933 13.7035 34.2001 18 34.2001C22.2966 34.2001 26.4171 32.4933 29.4552 29.4552C32.4933 26.4171 34.2001 22.2966 34.2001 18C34.2001 13.7035 32.4933 9.58301 29.4552 6.54492C26.4171 3.50683 22.2966 1.80005 18 1.80005C13.7035 1.80005 9.58301 3.50683 6.54492 6.54492C3.50683 9.58301 1.80005 13.7035 1.80005 18V18Z" stroke="white" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18 11.7686V18.0002L24.3324 25.3874" stroke="white" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            );
        case 'where':
            return (
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.8 12.6C28.8 21.6 18 34.2001 18 34.2001C18 34.2001 7.19995 21.6 7.19995 12.6C7.19995 9.73571 8.33781 6.98869 10.3632 4.9633C12.3886 2.9379 15.1356 1.80005 18 1.80005C20.8643 1.80005 23.6113 2.9379 25.6367 4.9633C27.6621 6.98869 28.8 9.73571 28.8 12.6V12.6Z" stroke="white" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.3999 12.6C14.3999 13.5548 14.7792 14.4705 15.4543 15.1456C16.1294 15.8207 17.0451 16.2 17.9999 16.2C18.9547 16.2 19.8704 15.8207 20.5455 15.1456C21.2206 14.4705 21.5999 13.5548 21.5999 12.6C21.5999 11.6452 21.2206 10.7295 20.5455 10.0544C19.8704 9.37928 18.9547 9 17.9999 9C17.0451 9 16.1294 9.37928 15.4543 10.0544C14.7792 10.7295 14.3999 11.6452 14.3999 12.6Z" fill="white" />
                </svg>

            );
        case 'who':
            return (
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.30005 8.10005C6.30005 9.77091 6.9638 11.3733 8.14528 12.5548C9.32676 13.7363 10.9292 14.4 12.6 14.4C14.2709 14.4 15.8733 13.7363 17.0548 12.5548C18.2363 11.3733 18.9 9.77091 18.9 8.10005C18.9 6.42919 18.2363 4.82676 17.0548 3.64528C15.8733 2.4638 14.2709 1.80005 12.6 1.80005C10.9292 1.80005 9.32676 2.4638 8.14528 3.64528C6.9638 4.82676 6.30005 6.42919 6.30005 8.10005Z" stroke="white" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M23.4 34.2V30.6C23.4 27.7357 22.2622 24.9887 20.2368 22.9633C18.2114 20.9379 15.4644 19.8 12.6 19.8C9.73571 19.8 6.98869 20.9379 4.9633 22.9633C2.9379 24.9887 1.80005 27.7357 1.80005 30.6V34.2H23.4Z" stroke="white" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M27.3349 3.17896C28.1374 3.8213 28.7706 4.65014 29.1794 5.59325C29.5881 6.53636 29.7601 7.56512 29.6802 8.5899C29.6003 9.61468 29.2711 10.6044 28.7211 11.4728C28.1712 12.3412 27.4172 13.0619 26.5249 13.5722" stroke="white" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M30.6001 34.2H34.2001V30.6C34.2006 28.7348 33.7181 26.9013 32.7995 25.2781C31.881 23.6548 30.5577 22.2971 28.9585 21.3372" stroke="white" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            );
        case 'what':
            return (
                <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.7998 18.2C1.7998 22.4965 3.50659 26.617 6.54468 29.6551C9.58276 32.6932 13.7033 34.4 17.9998 34.4C22.2963 34.4 26.4168 32.6932 29.4549 29.6551C32.493 26.617 34.1998 22.4965 34.1998 18.2C34.1998 13.9035 32.493 9.78296 29.4549 6.74487C26.4168 3.70678 22.2963 2 17.9998 2C13.7033 2 9.58276 3.70678 6.54468 6.74487C3.50659 9.78296 1.7998 13.9035 1.7998 18.2V18.2Z" stroke="white" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.9998 27.2V20" stroke="white" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.3998 10.9999C14.3998 11.9547 14.7791 12.8704 15.4542 13.5455C16.1293 14.2206 17.045 14.5999 17.9998 14.5999C18.9546 14.5999 19.8702 14.2206 20.5454 13.5455C21.2205 12.8704 21.5998 11.9547 21.5998 10.9999C21.5998 10.0451 21.2205 9.12945 20.5454 8.45432C19.8702 7.77919 18.9546 7.3999 17.9998 7.3999C17.045 7.3999 16.1293 7.77919 15.4542 8.45432C14.7791 9.12945 14.3998 10.0451 14.3998 10.9999Z" fill="white" />
                </svg>
            );
        default:
            return (

                <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.7998 18.2C1.7998 22.4965 3.50659 26.617 6.54468 29.6551C9.58276 32.6932 13.7033 34.4 17.9998 34.4C22.2963 34.4 26.4168 32.6932 29.4549 29.6551C32.493 26.617 34.1998 22.4965 34.1998 18.2C34.1998 13.9035 32.493 9.78296 29.4549 6.74487C26.4168 3.70678 22.2963 2 17.9998 2C13.7033 2 9.58276 3.70678 6.54468 6.74487C3.50659 9.78296 1.7998 13.9035 1.7998 18.2V18.2Z" stroke="white" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.9998 27.2V20" stroke="white" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.3998 10.9999C14.3998 11.9547 14.7791 12.8704 15.4542 13.5455C16.1293 14.2206 17.045 14.5999 17.9998 14.5999C18.9546 14.5999 19.8702 14.2206 20.5454 13.5455C21.2205 12.8704 21.5998 11.9547 21.5998 10.9999C21.5998 10.0451 21.2205 9.12945 20.5454 8.45432C19.8702 7.77919 18.9546 7.3999 17.9998 7.3999C17.045 7.3999 16.1293 7.77919 15.4542 8.45432C14.7791 9.12945 14.3998 10.0451 14.3998 10.9999Z" fill="white" />
                </svg>

            );
    }

}
