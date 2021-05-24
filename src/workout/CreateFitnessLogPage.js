import React, { useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProfileComponent from "../home/ProfileComponent";

function CreateFitnessLogPage() {
    const { type } = useParams()

    const [isLoading, setIsLoading] = useState(false);
    const [description, setDescription] = useState("");
    const [gym, setGym] = useState({
        Duration: null,
        Location: "",
        Types: []
    });
    const [meal, setMeal] = useState({
        Protein: null,
        Type: ""
    });

    function validate() {
        let validateObject;
        if(type === "Gym") {
            validateObject = gym.Duration !== null && gym.Location !== "" && gym.Types.length !== 0;
        }
        else if(type === "Meal") {
            validateObject = meal.Protein !== null && meal.Type !== "";
        }
        return description.length !== 0 && validateObject;
    }

    function postFitnessLog() {
        const rand = Math.floor(Math.random() * 10000)
        const date = Date.now() * 10000
        const id = date + rand
        const data = {
            "Date": new Date(Date.now()).toString(),
            "Description": description,
            "Gym": gym,
            "id": id,
            "LogType": type,
            "Meal": meal
        }

        axios.post(`https://j0zcpa8hsk.execute-api.us-west-1.amazonaws.com/prod/workout`, data)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(JSON.stringify(err))
            })
    }

    function handleSubmit() {
        postFitnessLog();
        // setIsLoading(true); // and yes as you can see this loading animation is purely for the user experience. No functionality at all....
        // setTimeout(function(){
        //     setIsLoading(false);
        //     window.location = "/workout" // ..... hmm how can we restore the search parameters
        // }, 2000);
    }

    function updateGymTypes(value) {
        let tempArr = gym.Types;
        if(tempArr.includes(value)) {
            const index = tempArr.indexOf(value);
            if (index > -1) {
                tempArr.splice(index, 1);
            }
        }
        else {
            tempArr.push(value);
        }
        setGym({...gym, Types: tempArr});
    }

    function renderForm() {
        if(type === "Gym") {
            return (
                <div>
                    <div style={{padding: "10px"}}>
                        <textarea className="textarea" placeholder={"Chest Day :)"} value={description} onChange={e => setDescription(e.target.value)}/>
                    </div>
                    <div style={{padding: "10px"}}> {/* why is it complaining.... */}
                        <input className="input" type="number" placeholder="Duration" value={gym.Duration} onChange={e => setGym({...gym, Duration: e.target.value})}/>
                    </div>
                    <div style={{padding: "10px"}}>
                        <input className="input" type="text" placeholder="Location" value={gym.Location} onChange={e => setGym({...gym, Location: e.target.value})}/>
                    </div>
                    <div style={{padding: "10px"}}>
                        <label className="checkbox" style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                            <input type="checkbox" onClick={(e) => updateGymTypes("Chest")}/>
                            <div className={"pl-2"}>Chest</div>
                        </label>
                        <label className="checkbox" style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                            <input type="checkbox" onClick={(e) => updateGymTypes("Back")}/>
                            <div className={"pl-2"}>Back</div>
                        </label>
                        <label className="checkbox" style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                            <input type="checkbox" onClick={(e) => updateGymTypes("Legs")}/>
                            <div className={"pl-2"}>Legs</div>
                        </label>
                        <label className="checkbox" style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                            <input type="checkbox" onClick={(e) => updateGymTypes("Biceps")}/>
                            <div className={"pl-2"}>Biceps</div>
                        </label>
                        <label className="checkbox" style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                            <input type="checkbox" onClick={(e) => updateGymTypes("Triceps")}/>
                            <div className={"pl-2"}>Triceps</div>
                        </label>
                        <label className="checkbox" style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                            <input type="checkbox" onClick={(e) => updateGymTypes("Abs")}/>
                            <div className={"pl-2"}>Abs</div>
                        </label>
                    </div>
                </div>
            )
        }
        else if(type === "Meal") {
            return (
                <div>
                    <div style={{padding: "10px"}}>
                        <textarea className="textarea" placeholder={"50 eggs"} value={description} onChange={e => setDescription(e.target.value)}/>
                    </div>
                    <div style={{padding: "10px"}}>
                        <input className="input" type="number" placeholder="Protein" value={meal.Protein} onChange={e => setMeal({...meal, Protein: e.target.value})}/>
                    </div>
                    <div style={{padding: "10px"}}>
                        <select className={"select"} value={meal.Type} onChange={(e) => setMeal({...meal, Type: e.target.value})}>
                            <option value="">Time of day</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Lunch">Lunch</option>
                            <option value="Dinner">Dinner</option>
                        </select>
                    </div>
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
                                Create a new {type} Log
                            </div>
                            <div style={{
                                padding: "5px",
                                borderRadius: "5px",
                                background: "#61E294"
                            }}>
                                {renderForm()}
                            </div>
                            <div style={{paddingTop: "10px"}}>
                                <button disabled={!validate()} className={isLoading ? "button is-loading" : "button"} style={{background: "#61E294"}} onClick={() => handleSubmit()}>Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CreateFitnessLogPage;