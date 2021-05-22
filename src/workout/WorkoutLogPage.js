import React, { useEffect, useState } from "react";
import "../App.css";
import ProfileComponent from "../home/ProfileComponent";
import axios from 'axios';


function WorkoutLogPage() {

    const [workouts, setWorkouts] = useState([]);
    const [Database, setDatabase] = useState("");
    const [LogType, setLogType] = useState("");
    const [String_1, setString_1] = useState("");
    const [Int_1, setInt_1] = useState("");

    useEffect(() => {
        axios.get(`https://j0zcpa8hsk.execute-api.us-west-1.amazonaws.com/prod/workout?LogType=` + LogType + `&String_1=` + String_1 + `&Int_1=` + Int_1)
            .then(res => {
                console.log(res.data)

                // TODO: Set up sorting
                // const sortedWorkouts = res.data.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
                setWorkouts(res.data)

            })
    }, [LogType, String_1]);

    function renderTypeSelection() {
        if(Database === "") {
            return <div></div>
        }
        else {
            switch(Database) {
                case "Fitness":
                    return (
                        <select className={"select"} value={LogType} onChange={(e) => {
                            setLogType(e.target.value);
                            setString_1("");
                            setInt_1("");
                        }}>
                            <option value="">Log Type</option>
                            <option value="Gym">Gym</option>
                            <option value="Meal">Meal</option>
                        </select>
                    )
                default:
                    return <div></div>
            }
        }
    }

    function renderString_1Selection() {
        if(Database === "" || LogType === "") {
            return <div></div>
        }
        else {
            switch(LogType) {
                case "Gym":
                    return (
                        <select className={"select"} value={String_1} onChange={(e) => setString_1(e.target.value)}>
                            <option value="">Workout</option>
                            <option value="Chest">Chest</option>
                            <option value="Back">Back</option>
                            <option value="Legs">Legs</option>
                            <option value="Biceps">Biceps</option>
                            <option value="Triceps">Triceps</option>
                            <option value="Abs">Abs</option>
                        </select>
                    )
                case "Meal":
                    return (
                        <select className={"select"} value={String_1} onChange={(e) => setString_1(e.target.value)}>
                            <option value="">Meal of the day</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Lunch">Lunch</option>
                            <option value="Dinner">Dinner</option>
                        </select>
                    )
                default:
                    return <div></div>
            }
        }
    }

    return (
        <div
            className={"home"}
            style={{
                background: "white",
                color: "black",
                width: "100vw",
                minHeight: "100vh"
            }}
        >
            <div className={"container p-3"}>
                <div className={"columns"}>
                    <div className={"column"}>
                        <ProfileComponent/>
                    </div>
                    <div className={"column is-two-thirds"}>
                        <div
                            className={"mt-3"}
                            style={{
                                background: "",
                                padding: "15px",
                                borderRadius: "10px"
                            }}
                        >
                            <div className={"title"}>
                                Workout Logs
                            </div>
                            <div
                                className={"my-3"}
                                style={{display: "flex", flexDirection: "column", background: "#61E294", borderRadius: "5px", padding: "5px"}}
                            >
                                <div style={{display: "flex", flexDirection: "row"}}>
                                    <div style={{padding: "10px"}}>
                                        <select className={"select"} value={Database} onChange={(e) => {
                                            setDatabase(e.target.value);
                                            setString_1("");
                                            setInt_1("");
                                            setLogType("");
                                        }}>
                                            <option value="">Database</option>
                                            <option value="Fitness">Fitness</option>
                                        </select>
                                    </div>
                                    <div style={{padding: "10px"}}>
                                        {renderTypeSelection()}
                                    </div>
                                </div>
                                <div style={{padding: "10px"}}>
                                    {renderString_1Selection()}
                                </div>
                            </div>
                            <div>
                                {workouts.map(workout => (
                                    <div style={{display: "flex", flexDirection: "row"}}>
                                        <div>
                                            {workout.LogType}
                                        </div>
                                        <div style={{paddingLeft: "5px"}}>
                                            {workout.LogType === "Gym" ? "Workout:" : "Meal of the day:"} {workout.String_1}
                                        </div>
                                        <div style={{paddingLeft: "5px"}}>
                                            {workout.LogType === "Gym" ? "Minutes:" : "Grams of protein:"} {workout.Int_1}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkoutLogPage;