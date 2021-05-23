import React, { useEffect, useState } from "react";
import "../App.css";
import ProfileComponent from "../home/ProfileComponent";
import axios from 'axios';
import EntryComponent from "./EntryComponent";


function FeedPage() {

    const [entries, setEntries] = useState([]);
    // const [maxEntry, setMaxEntry] = useState(0);

    useEffect(() => {
        axios.get(`https://qqt2r1ziie.execute-api.us-west-1.amazonaws.com/prod/entry`)
            .then(res => {
                console.log(res.data)
                const sortedEntries = res.data.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
                setEntries(res.data)
                // let currMax = 0;
                // for(let i = 0; i<res.data.length; i++) {
                //     let entryNum = parseInt(res.data[i].id);
                //     if(currMax < entryNum) {
                //         console.log("set")
                //         currMax = entryNum
                //     }
                // }
                // setMaxEntry(currMax);
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
                                Feed
                            </div>
                            <button className="button" style={{background: "#61E294"}} onClick={() => window.location = "/feed/create"}>Send me a Message!!!</button>
                            <div>
                                {entries.map(entry => (
                                    <EntryComponent title={entry.title} description={entry.description} author={entry.author} date={entry.date}/>
                                ))}
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

export default FeedPage;