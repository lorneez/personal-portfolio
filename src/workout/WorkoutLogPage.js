import React, { useEffect, useState } from "react";
import "../App.css";
import ProfileComponent from "../home/ProfileComponent";
import axios from 'axios';


function WorkoutLogPage() {

    const [workouts, setWorkouts] = useState([]);
    const [LogType, setLogType] = useState("");
    const [String_1, setString_1] = useState("");
    const [Int_1, setInt_1] = useState("");

    useEffect(() => {
        axios.get(`https://j0zcpa8hsk.execute-api.us-west-1.amazonaws.com/prod/workout?LogType=` + "Meal" + `&String_1=` + "" + `&Int_1=` + "")
            .then(res => {
                console.log(res.data)

                // TODO: Set up sorting
                // const sortedWorkouts = res.data.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
                setWorkouts(res.data)

            })
    }, []);

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
                            <div>
                                {workouts.map(workout => (
                                    <div style={{display: "flex", flexDirection: "row"}}>
                                        <div>
                                            {workout.LogType}
                                        </div>
                                        <div style={{paddingLeft: "5px"}}>
                                            {workout.LogType === "Gym" ? "Body part focused:" : "Meal of the day:"} {workout.String_1}
                                        </div>
                                        <div style={{paddingLeft: "5px"}}>
                                            {workout.LogType === "Gym" ? "Hours worked out:" : "Grams of protein:"} {workout.Int_1}
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