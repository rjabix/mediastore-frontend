import React from "react";
export default function AppleLogo({type = 'gray', width = '25px', height = '25px'}) {
    let url;
    switch (type) {
        case "gray":
            url = 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg';
            break;
        case "white":
            url = 'https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg';
            break;
        case "black":
            url = 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg';
            break;
        case "dark_gray":
            url = 'https://upload.wikimedia.org/wikipedia/commons/7/74/Apple_logo_dark_grey.svg';
            break;
        case "rainbow":
            url = 'https://upload.wikimedia.org/wikipedia/commons/8/84/Apple_Computer_Logo_rainbow.svg';
            break;
        default:
            console.log("AppleLogo type not found");
            return (<></>);
    }

    return (
        <img src={url}
             alt="apple logo" style={{objectFit: "contain", width: width, height: height}}/>
    );
}