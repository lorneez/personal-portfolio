import React from "react";
import TextLoop from "react-text-loop";
import Collapsible from 'react-collapsible';
import "./App.css";
import Lorne from "./IMG_9584.jpeg";

function HomePage() {
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
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >

                            <div
                                className={"block"}
                                style={{
                                    fontSize: "70px",
                                    lineHeight: "80px",
                                    color: ""
                                }}
                            >
                                Lorne Zhang
                            </div>
                            <figure className="image" style={{height: "300px", width: "240px", borderRadius: "10px"}}>
                                <img className="is-3by4" src={Lorne} style={{borderRadius: "10px"}}/>
                            </figure>
                            <div
                                className={"block"}
                                style={{
                                    fontSize: "30px"
                                }}
                            >
                                <TextLoop>
                                    <span>Software Engineer</span>
                                    <span>Fitness Enthusiast</span>
                                    <span>Cat Lover</span>
                                    <span>Eagle Scout</span>
                                </TextLoop>{" "}
                            </div>
                            <div>
                                \ ˈlȯrn \ pronounced like "corn" with an "L", just like Lorne Micheals from Saturday Night Live.
                            </div>
                        </div>
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
                                This is what Lorne has been up to...
                            </div>
                            <div>
                                <Collapsible trigger="Capital One: Software Engineering Intern">
                                    <div className={"pl-3 mb-3 mt-2"} style={{background: "#61E294", borderRadius: "5px", padding: "5px"}}>
                                        <div>
                                            Backend infrastructure and machine learning.
                                        </div>
                                        <div>
                                            Summer 2021
                                        </div>
                                        <div className={"pl-5"}>
                                            Backend infrastructure and machine learning.
                                        </div>
                                    </div>
                                </Collapsible>
                            </div>
                            <div className={"pl-6"}>

                            </div>
                            <div>
                                <Collapsible trigger="Sparrow Lending: Software Engineering Intern">
                                    <div className={"pl-3 mb-3 mt-2"} style={{background: "#61E294", borderRadius: "5px", padding: "5px"}}>
                                        <div>
                                            Website, Mobile, ML Teams
                                        </div>
                                        <div>
                                            December 2020 - Present
                                        </div>
                                        <div className={"pl-5"}>
                                            Currently developing the backend in <span style={{fontStyle: "italic", color: ""}}>Node</span> and <span style={{fontStyle: "italic", color: ""}}>AWS</span>.
                                        </div>
                                        <div className={"pl-5"}>
                                            Previously designed modified logistic regression classifier, deep neural network, and decision tree models for predicting interest rate for student loans.
                                        </div>
                                        <div className={"pl-5"}>
                                            Previously architected authentication and Plaid integration and implemented frontend pages utilizing <span style={{fontStyle: "italic", color: ""}}>React</span> and <span style={{fontStyle: "italic", color: ""}}>Firebase</span>.
                                        </div>
                                        <div className={"pl-5"}>
                                            Previously worked on V2 of iOS app in <span style={{fontStyle: "italic", color: ""}}>SwiftUI</span>, implementing <span style={{fontStyle: "italic", color: ""}}>Figma</span> designs and creating custom reusable components.
                                        </div>
                                    </div>
                                </Collapsible>
                            </div>
                            <div>
                                <Collapsible trigger="Restvo: Software Engineering Intern">
                                    <div className={"pl-3 mb-3 mt-2"} style={{background: "#61E294", borderRadius: "5px", padding: "5px"}}>
                                        <div>
                                            Backend Team
                                        </div>
                                        <div>
                                            March 2020 - August 2020
                                        </div>
                                        <div className={"pl-5"}>
                                            Designed and improved the Restvo MVP by working closely with the CTO to learn <span style={{fontStyle: "italic", color: ""}}>Node</span> and <span style={{fontStyle: "italic", color: ""}}>MongoDB</span>.
                                        </div>
                                        <div className={"pl-5"}>
                                            Implemented system logging and MongoDB aggregate pipelines for recording and displaying site metrics.
                                        </div>
                                        <div className={"pl-5"}>
                                            Wrote <span style={{fontStyle: "italic", color: ""}}>Mocha Chai</span> unit tests for backend calls for user metrics.
                                        </div>
                                    </div>
                                </Collapsible>

                            </div>
                        </div>
                        <div
                            className={"mt-5"}
                            style={{
                                background: "",
                                padding: "15px",
                                borderRadius: "10px"
                            }}
                        >
                            <div className={"title"}>
                                In terms of tech...
                            </div>
                            <div>
                                <Collapsible trigger="Lorne is learning C++ and gRPC.">
                                    <div className={"pl-3 mb-3 mt-2"} style={{background: "#61E294", borderRadius: "5px", padding: "5px"}}>
                                        <div>
                                            insert Github link.
                                        </div>
                                    </div>
                                </Collapsible>
                            </div>
                            <div>
                            </div>
                            <div>
                                <Collapsible trigger="Lorne is learning AWS.">
                                    <div className={"pl-3 mb-3 mt-2"} style={{background: "#61E294", borderRadius: "5px", padding: "5px"}}>
                                        <div>
                                            DynamoDB, Amplify, Lambdas.
                                        </div>
                                    </div>
                                </Collapsible>
                            </div>
                            <div>
                            </div>
                            <div>
                                <Collapsible trigger="Lorne's favorite web development stack is the MERN stack.">
                                    <div className={"pl-3 mb-3 mt-2"} style={{background: "#61E294", borderRadius: "5px", padding: "5px"}}>
                                        <div>
                                            MongoDB, Express, React, and Node supported with Redux/React Contexts and Bulma.
                                        </div>
                                        <div>
                                            This website was created with these frameworks and tools.
                                        </div>
                                    </div>
                                </Collapsible>
                            </div>
                            <div>
                                <Collapsible trigger="Lorne's favorite sub fields of machine learning include image classification, logistic regression, and decision tree models.">
                                    <div className={"pl-3 mb-3 mt-2"} style={{background: "#61E294", borderRadius: "5px", padding: "5px"}}>
                                        <div>
                                            Duke CompSci 474: Used HIV DNA sequence data to predict interferon sensitivity levels and extract important sequence regions. Implemented cross validation and hyper tuning of tree models (decision trees, random forests, and gradient boosted) and analyzed both base pair and protein level sequences to provide a list of protein and offsets for guiding future lab experiments.
                                        </div>
                                        <div>
                                            Duke CompSci 474: Competed in the IEEE Data Fusion Contest Track DSE to detect human settlements without electricity given 98 different channels of satellite data. Worked with FCN models, pretrained ResNet50 models, decision trees.
                                        </div>
                                        <div>
                                            Custom modified logistic regression model.
                                        </div>
                                        <div>
                                            Keras Cifar-10 app.
                                        </div>
                                    </div>
                                </Collapsible>
                            </div>
                        </div>
                        <div
                            className={"mt-5"}
                            style={{
                                background: "",
                                padding: "15px",
                                borderRadius: "10px"
                            }}
                        >
                            <div className={"title"}>
                                Current endeavors...
                            </div>
                            <div>
                                Lorne is reading The Power of Now by Eckhart Tolle.
                            </div>
                            <div>
                                Lorne is has started using Notion to organize and track his daily life.
                            </div>
                            <div>
                                Lorne got a new gym membership at Snap Fitness.
                            </div>
                            <div>
                                Lorne is listening to Ed Mylett on Spotify.
                            </div>
                        </div>
                        <div className={"mt-5"} style={{padding: "15px"}}>
                            Developed with React, Bulma, AWS. Last updated&nbsp;<span style={{fontStyle: "italic", color: ""}}>05/19/2021</span>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;