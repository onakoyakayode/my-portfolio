import React from "react"

export default function Work(props) {

    let workProgress
    if (props.openSlot === 0) {
        workProgress = "in-progress"
    } else if (props.work === "available"){
        workProgress = "Live"
    }

    return (
        <div className="work-section">
            <div className="work-details">
                {workProgress && <p className="in-progress">{workProgress}</p>}
                <img src={props.img} className="work-image" alt="work" />
                <h3 className="work-title">{props.title}</h3>
            </div>
        </div>
    )
}