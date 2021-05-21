import React from "react";

function EntryComponent(props) {
    const days = Math.floor((Date.now() - Date.parse(props.date)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((Date.now() - Date.parse(props.date)) / (1000 * 60 * 60) % 24);
    const minutes = Math.floor((Date.now() - Date.parse(props.date)) / (1000 * 60) % 60);
    return (
        <div
            className={"my-3"}
            style={{display: "flex", flexDirection: "column", background: "#61E294", borderRadius: "5px", padding: "5px"}}
        >
            <div style={{display: "flex", flexDirection: "row"}}>
                <div style={{fontWeight: "bold", paddingRight: "5px"}}>
                    {props.title}
                </div>
                <div style={{paddingRight: "5px"}}>
                    posted by:
                </div>
                <div style={{fontStyle: "italic", paddingRight: "5px"}}>
                    {props.author}
                </div>
                <div style={{paddingRight: "5px"}}>
                    {days} {days === 1 ? "day" : "days"}, {hours} {hours === 1 ? "hour" : "hours"}, {minutes} {minutes === 1 ? "minute" : "minutes"} ago
                </div>
            </div>
            <div style={{margin: "10px", padding: "10px", borderStyle: "solid", borderRadius: "5px", borderWidth: "1px", background: "white"}}>
                {props.description}
            </div>
        </div>
    )
}

export default EntryComponent;