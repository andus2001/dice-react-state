import React from "react"

function Dice(props){
    return(
        <div>
            <button className="die">{props.number}</button>
        </div>
    )
}

export default Dice