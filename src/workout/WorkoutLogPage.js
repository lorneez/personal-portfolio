import React, { useEffect, useState } from "react";
import "../App.css";
import ProfileComponent from "../home/ProfileComponent";
import axios from 'axios';
import FitnessEntryComponent from "./FitnessEntryComponent";
import LineChart from 'react-linechart';
import '../../node_modules/react-linechart/dist/styles.css';

function WorkoutLogPage() {

    const [workouts, setWorkouts] = useState([]);
    const [buckets, setBuckets] = useState([]);

    const [Database, setDatabase] = useState("");
    const [LogType, setLogType] = useState("");
    const [GymLocation, setGymLocation] = useState("");
    const [GymType, setGymType] = useState("");
    const [MealType, setMealType] = useState("");

    const [RangeDuration, setRangeDuration] = useState("");
    const [RangeValue, setRangeValue] = useState("");
    const [BucketDuration, setBucketDuration] = useState("");

    function generateFitnessAPICall() {
        // must require LogType, Type, Location, RangeDuration, RangeValue, and BucketDuration
        let URL;
        if(LogType === "Gym") {
            URL = `https://j0zcpa8hsk.execute-api.us-west-1.amazonaws.com/prod/workout?LogType=Gym&Type=`
                + GymType
                + "&Location="
                + GymLocation
                + "&RangeDuration="
                + RangeDuration
                + "&RangeValue="
                + RangeValue
                + "&BucketDuration="
                + BucketDuration
            ;
        }
        else if(LogType === "Meal") {
            URL = `https://j0zcpa8hsk.execute-api.us-west-1.amazonaws.com/prod/workout?LogType=Meal&Type=`
                + MealType
                + "&RangeDuration="
                + RangeDuration
                + "&RangeValue="
                + RangeValue
                + "&BucketDuration="
                + BucketDuration
            ;
        }
        return URL;
    }

    useEffect(() => {
        if(Database === "Fitness" && LogType !== "") {
            console.log(generateFitnessAPICall())
            axios.get(generateFitnessAPICall())
                .then(res => {
                    console.log(res.data);
                    setWorkouts(res.data.results);
                    let tempBuckets = [];

                    for(let i=0; i<res.data.buckets.length; i++) {
                        tempBuckets.push(
                            {
                                x: res.data.buckets.length - i,
                                y: res.data.buckets[i]
                            }
                        )
                    }
                    tempBuckets.push({
                        x: 0,
                        y: 0
                    })
                    setBuckets(tempBuckets);
                })
        }
        else {
            setWorkouts([]);
            setBuckets([]);
        }
    }, [Database, LogType, GymLocation, GymType, MealType, RangeDuration, RangeValue, BucketDuration]);

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
                            setBucketDuration("");
                            setRangeValue("");
                            setRangeDuration("");
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

    function renderBucketSelection() {
        if(Database === "" || LogType === "") {
            return <div></div>
        }
        else {
            return (
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <div style={{padding: "10px"}}>
                            <select className={"select"} value={RangeDuration} onChange={(e) => setRangeDuration(e.target.value)}>
                                <option value="">Range Duration</option>
                                <option value="Day">Day</option>
                                <option value="Week">Week</option>
                                <option value="Month">Month</option>
                                <option value="Year">Year</option>
                            </select>
                        </div>
                        <div style={{padding: "10px"}}>
                            <select className={"select"} value={RangeValue} onChange={(e) => setRangeValue(e.target.value)}>
                                <option value="">Range Value</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <div style={{padding: "10px"}}>
                            <select className={"select"} value={BucketDuration} onChange={(e) => setBucketDuration(e.target.value)}>
                                <option value="">Bucket Duration</option>
                                <option value="Day">Day</option>
                                <option value="Week">Week</option>
                                <option value="Month">Month</option>
                                <option value="Year">Year</option>
                            </select>
                        </div>
                    </div>
                </div>
            )
        }
    }

    function renderWorkouts() {
        if(Database === "" || LogType === "") {
            return <div></div>
        }
        else {
            return (
                <div>
                    <div className={"title"}>
                        List View
                    </div>
                    {workouts.map(workout => (
                        <FitnessEntryComponent LogType={workout.LogType} Gym={workout.Gym} Meal={workout.Meal} Date={workout.Date} Description={workout.Description}/>
                    ))}
                </div>
            )
        }
    }

    function renderBucketGraph() {
        if(buckets.length === 0) {
            return <div></div>
        }
        else {

            const data = [
                {
                    id: "hi",
                    name: "graph",
                    color: "#61E294",
                    points: buckets
                }
            ];
            return (
                <div>
                    <div className={"title"}>
                        {renderBucketTitle()}
                    </div>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                        <LineChart
                            interpolate={"none"}
                            xLabel={"DAYS"}
                            yLabel={LogType === "Gym" ? "MINUTES IN THE GYM" : "GRAMS OF PROTEIN"}
                            width={300}
                            height={300}
                            data={data}
                        />
                    </div>
                </div>
            )
        }
    }

    function renderBucketTitle() {
        if(RangeValue === "" || RangeDuration === "" || BucketDuration === "") {
            return (
                <div>
                    Timeline: All past {LogType === "Gym" ? "gym durations" : "protein counts"} bucketed into days
                </div>
            )
        }
        else {
            return (
                <div>
                    Timeline: Past {RangeValue} {RangeDuration} bucketed into {BucketDuration}s
                </div>
            )
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
                                            setBucketDuration("");
                                            setRangeValue("");
                                            setRangeDuration("");
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
                                <div>
                                    {renderBucketSelection()}
                                </div>
                            </div>
                            <div>
                                {renderBucketGraph()}
                            </div>
                            <div>
                                {renderWorkouts()}
                            </div>
                        </div>
                        <div className={"mt-5"} style={{padding: "15px"}}>
                            Developed with React, Bulma, AWS. Last updated&nbsp;<span style={{fontWeight: "bold", fontStyle: "", color: "#61E294"}}>05/22/2021</span>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkoutLogPage;