import React, { useEffect, useState } from "react";
import "../App.css";
import ProfileComponent from "../home/ProfileComponent";
import axios from 'axios';
import FitnessEntryComponent from "./FitnessEntryComponent";


function WorkoutLogPage() {

    const [workouts, setWorkouts] = useState([]);

    const [Database, setDatabase] = useState("");
    const [LogType, setLogType] = useState("");
    const [GymLocation, setGymLocation] = useState("");
    const [GymType, setGymType] = useState("");
    const [MealType, setMealType] = useState("");

    function generateFitnessAPICall() {
        if(LogType === "") {
            return `https://j0zcpa8hsk.execute-api.us-west-1.amazonaws.com/prod/workout?LogType=`;
        }
        else {
            if(LogType === "Gym") {
                return `https://j0zcpa8hsk.execute-api.us-west-1.amazonaws.com/prod/workout?LogType=Gym&Type=` + GymType + "&Location=" + GymLocation;
            }
            else if(LogType === "Meal") {
                return `https://j0zcpa8hsk.execute-api.us-west-1.amazonaws.com/prod/workout?LogType=Meal&Type=` + MealType;
            }
        }
    }

    useEffect(() => {
        if(Database === "Fitness") {
            axios.get(generateFitnessAPICall())
                .then(res => {
                    console.log(res.data)

                    // TODO: Set up sorting
                    const sortedWorkouts = res.data.sort((a, b) => Date.parse(b.Date) - Date.parse(a.Date))
                    setWorkouts(res.data)

                })
        }
    }, [Database, LogType, GymLocation, GymType, MealType]);

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
                            setGymType("");
                            setGymLocation("");
                            setMealType("");
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
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <div style={{padding: "10px"}}>
                                <select className={"select"} value={GymType} onChange={(e) => setGymType(e.target.value)}>
                                    <option value="">Workout</option>
                                    <option value="Chest">Chest</option>
                                    <option value="Back">Back</option>
                                    <option value="Legs">Legs</option>
                                    <option value="Biceps">Biceps</option>
                                    <option value="Triceps">Triceps</option>
                                    <option value="Abs">Abs</option>
                                </select>
                            </div>
                            <div style={{padding: "10px"}}>
                                <select className={"select"} value={GymLocation} onChange={(e) => setGymLocation(e.target.value)}>
                                    <option value="">Location</option>
                                    <option value="Snap Fitness">Snap Fitness</option>
                                    <option value="Home">Home</option>
                                </select>
                            </div>
                        </div>
                    )
                case "Meal":
                    return (
                        <div style={{padding: "10px"}}>
                            <select className={"select"} value={MealType} onChange={(e) => setMealType(e.target.value)}>
                                <option value="">Meal of the day</option>
                                <option value="Breakfast">Breakfast</option>
                                <option value="Lunch">Lunch</option>
                                <option value="Dinner">Dinner</option>
                            </select>
                        </div>
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
                                Fitness Logs
                            </div>
                            <div
                                className={"my-3"}
                                style={{display: "flex", flexDirection: "column", background: "#61E294", borderRadius: "5px", padding: "5px"}}
                            >
                                <div style={{display: "flex", flexDirection: "row"}}>
                                    <div style={{padding: "10px"}}>
                                        <select className={"select"} value={Database} onChange={(e) => {
                                            setDatabase(e.target.value);
                                            setWorkouts([]);
                                            setLogType("");
                                            setGymType("");
                                            setGymLocation("");
                                            setMealType("");
                                        }}>
                                            <option value="">Database</option>
                                            <option value="Fitness">Fitness</option>
                                        </select>
                                    </div>
                                    <div style={{padding: "10px"}}>
                                        {renderTypeSelection()}
                                    </div>
                                </div>
                                <div>
                                    {renderString_1Selection()}
                                </div>
                            </div>
                            <div>
                                {workouts.map(workout => (
                                    <FitnessEntryComponent LogType={workout.LogType} Gym={workout.Gym} Meal={workout.Meal} Date={workout.Date} Description={workout.Description}/>
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