import React from "react";

function FitnessEntryComponent(props) {

    function renderEntry() {
        if(props.LogType === "Gym") {
            return (
                <div>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <div style={{fontWeight: "bold", paddingRight: "5px"}}>
                            {props.Gym.Duration}
                        </div>
                        <div style={{paddingRight: "5px"}}>
                            minute gym at
                        </div>
                        <div style={{fontWeight: "bold", paddingRight: "5px"}}>
                            {props.Gym.Location}
                        </div>
                        <div style={{paddingRight: "5px"}}>
                            {days} {days === 1 ? "day" : "days"}, {hours} {hours === 1 ? "hour" : "hours"}, and {minutes} {minutes === 1 ? "minute" : "minutes"} ago
                        </div>
                    </div>
                    <div style={{margin: "10px", padding: "10px", borderStyle: "solid", borderRadius: "5px", borderWidth: "1px", background: "white"}}>
                        {props.Description}
                    </div>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        {props.Gym.Types.map(type => (
                            <div style={{margin: "10px", padding: "10px", borderStyle: "solid", borderRadius: "5px", borderWidth: "1px", background: "white"}}>
                                {type}
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
        else if(props.LogType === "Meal") {
            return (
                <div>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <div style={{fontWeight: "bold", paddingRight: "5px"}}>
                            {props.Meal.Protein}
                        </div>
                        <div style={{paddingRight: "5px"}}>
                            gram protein
                        </div>
                        <div style={{fontWeight: "bold", paddingRight: "5px"}}>
                            {props.Meal.Type}
                        </div>
                        <div style={{paddingRight: "5px"}}>
                            eaten {days} {days === 1 ? "day" : "days"}, {hours} {hours === 1 ? "hour" : "hours"}, and {minutes} {minutes === 1 ? "minute" : "minutes"} ago
                        </div>
                    </div>
                    <div style={{margin: "10px", padding: "10px", borderStyle: "solid", borderRadius: "5px", borderWidth: "1px", background: "white"}}>
                        {props.Description}
                    </div>
                </div>
            )
        }
    }

    const days = Math.floor((Date.now() - Date.parse(props.Date)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((Date.now() - Date.parse(props.Date)) / (1000 * 60 * 60) % 24);
    const minutes = Math.floor((Date.now() - Date.parse(props.Date)) / (1000 * 60) % 60);
    return (
        <div
            className={"my-3"}
            style={{display: "flex", flexDirection: "column", background: "#61E294", borderRadius: "5px", padding: "5px"}}
        >
            {renderEntry()}
        </div>
    )
}

export default FitnessEntryComponent;