import React from "react";
import notfound from "/404.gif"
function NotFound(){
    return(
        <div className="w-screen h-screen flex items-center justify-center bg-[#000000]">
            <img className="object-cover" src={notfound} alt="" />
        </div>
    )
}
export default NotFound;