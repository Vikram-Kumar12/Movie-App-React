import React from "react";
import loader from "/loader.webp"
function Loading(){
    return(
        <div className="w-screen h-screen flex items-center justify-center bg-[#000000]">
            <img className="object-cover" src={loader} alt="" />
        </div>
    )
}
export default Loading;