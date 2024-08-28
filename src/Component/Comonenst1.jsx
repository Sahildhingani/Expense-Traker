import React from "react";
function Bar(text,val){
    return(
        <>
        <div className="h-8 flex justify-between">
            <h1 className="text-black font-bold">{text}</h1>
            <h1 className="text-black font-bold" >{val}</h1>
        </div>
        </>
    )
}
export default Bar;