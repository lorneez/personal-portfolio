import React, { useEffect, useState } from "react";
import "./App.css";
import ProfileComponent from "./ProfileComponent";
import axios from 'axios';
import EntryComponent from "./EntryComponent";


function FeedPage() {

    const [entries, setEntries] = useState([])

    useEffect(() => {
        axios.get(`https://qqt2r1ziie.execute-api.us-west-1.amazonaws.com/prod/entry`)
            .then(res => {
                console.log(res.data)
                const sortedEntries = res.data.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
                setEntries(res.data)
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
                            <div>
                                {entries.map(entry => (
                                    <EntryComponent title={entry.title} description={entry.description} author={entry.author} date={entry.date}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedPage;