import React, { useState } from "react";
import ProfileComponent from "../home/ProfileComponent";
import axios from "axios";

function MakeEntryPage() {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function validate() {
        return name.length !== 0 && title.length !== 0 && description.length !== 0
    }

    function postEntry() {
        axios.post(`https://qqt2r1ziie.execute-api.us-west-1.amazonaws.com/prod/entry`,
            {
                id: String(Date.now()) + "-" + String(Math.random()),
                author: name,
                title: title,
                description: description,
                date: new Date(Date.now()).toString()
            })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    function handleSubmit() {
        postEntry();
        setIsLoading(true);
        setTimeout(function(){
            setIsLoading(false);
            window.location = "/feed"
        }, 2000);
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
                                Create a new Entry
                            </div>
                            <div style={{
                                padding: "5px",
                                borderRadius: "5px",
                                background: "#61E294"
                            }}>
                                <div style={{padding: "10px"}}>
                                    <input className="input" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
                                </div>
                                <div style={{padding: "10px"}}>
                                    <input className="input" type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}/>
                                </div>
                                <div style={{padding: "10px"}}>
                                    <textarea className="textarea" placeholder="e.g. Hello world" value={description} onChange={e => setDescription(e.target.value)}/>
                                </div>
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
}

export default MakeEntryPage;