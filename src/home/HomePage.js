import React, { useState } from "react";
import Collapsible from 'react-collapsible';
import "../App.css";
import ProfileComponent from "./ProfileComponent";
import FadeIn from 'react-fade-in';

function HomePage() {

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);

    function getString(num) {
        switch(num){
            case 1:
                return open1 ? "⬆️ Capital One: Software Engineering Intern" : "⬇️ Capital One: Software Engineering Intern";
            case 2:
                return open2 ? "⬆️ Sparrow Lending: Software Engineering Intern" : "⬇️ Sparrow Lending: Software Engineering Intern";
            case 3:
                return open3 ? "⬆️ Restvo: Software Engineering Intern" : "⬇️ Restvo: Software Engineering Intern";
            case 4:
                return open4 ? "⬆️ Lorne is learning C++." : "⬇️ Lorne is learning C++.";
            case 5:
                return open5 ? "⬆️ Lorne is learning AWS." : "⬇️ Lorne is learning AWS.";
            case 6:
                return open6 ? "⬆️ Lorne's favorite web development stack is the MERN stack." : "⬇️ Lorne's favorite web development stack is the MERN stack.";
            case 7:
                return open7 ? "⬆️ Lorne's favorite sub fields of machine learning include image classification, logistic regression, and decision tree models." : "⬇️ Lorne's favorite sub fields of machine learning include image classification, logistic regression, and decision tree models.";
            default:
                return ""
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
                            <FadeIn>
                                <div className={"title"}>
                                    This is what Lorne has been up to...
                                </div>
                            </FadeIn>
                            <FadeIn>
                                <div>
                                    <Collapsible trigger={getString(1)} onOpening={() => setOpen1(!open1)} onClosing={() => setOpen1(!open1)}>
                                        <div className={"pl-3 mb-3 mt-2"} style={{background: "#61E294", borderRadius: "5px", padding: "5px"}}>
                                            <div>
                                                Backend infrastructure and machine learning.
                                            </div>
                                            <div>
                                                June 2021 - August 2021
                                            </div>
                                            <div className={"pl-5"}>
                                                - This summer, I am going to be a software engineering intern at Capital One. I am very excited to gain exposure to the fintech industry and see if I like working at larger companies.
                                            </div>
                                        </div>
                                    </Collapsible>
                                </div>
                                <div className={"pl-6"}>

                                </div>
                            </FadeIn>
                            <FadeIn>
                                <div>
                                    <Collapsible trigger={getString(2)} onOpening={() => setOpen2(!open2)} onClosing={() => setOpen2(!open2)}>
                                        <div className={"pl-3 mb-3 mt-2"} style={{background: "#61E294", borderRadius: "5px", padding: "5px"}}>
                                            <div>
                                                Website, Mobile, ML Teams
                                            </div>
                                            <div>
                                                December 2020 - Present
                                            </div>
                                            <div className={"pl-5"}>
                                                - Currently developing the backend in <span style={{fontStyle: "italic", color: ""}}>Node</span> and <span style={{fontStyle: "italic", color: ""}}>AWS</span>.
                                            </div>
                                            <div className={"pl-5"}>
                                                - Previously designed modified logistic regression classifier, deep neural network, and decision tree models for predicting interest rate for student loans.
                                            </div>
                                            <div className={"pl-5"}>
                                                - Previously architected authentication and Plaid integration and implemented frontend pages utilizing <span style={{fontStyle: "italic", color: ""}}>React</span> and <span style={{fontStyle: "italic", color: ""}}>Firebase</span>.
                                            </div>
                                            <div className={"pl-5"}>
                                                - Previously worked on V2 of iOS app in <span style={{fontStyle: "italic", color: ""}}>SwiftUI</span>, implementing <span style={{fontStyle: "italic", color: ""}}>Figma</span> designs and creating custom reusable components.
                                            </div>
                                        </div>
                                    </Collapsible>
                                </div>
                            </FadeIn>
                            <FadeIn>
                                <div>
                                    <Collapsible trigger={getString(3)} onOpening={() => setOpen3(!open3)} onClosing={() => setOpen3(!open3)}>
                                        <div className={"pl-3 mb-3 mt-2"} style={{background: "#61E294", borderRadius: "5px", padding: "5px"}}>
                                            <div>
                                                Backend Team
                                            </div>
                                            <div>
                                                March 2020 - August 2020
                                            </div>
                                            <div className={"pl-5"}>
                                                - Designed and improved the Restvo MVP by working closely with the CTO to learn <span style={{fontStyle: "italic", color: ""}}>Node</span> and <span style={{fontStyle: "italic", color: ""}}>MongoDB</span>.
                                            </div>
                                            <div className={"pl-5"}>
                                                - Implemented system logging and MongoDB aggregate pipelines for recording and displaying site metrics.
                                            </div>
                                            <div className={"pl-5"}>
                                                - Wrote <span style={{fontStyle: "italic", color: ""}}>Mocha Chai</span> unit tests for backend calls for user metrics.
                                            </div>
                                        </div>
                                    </Collapsible>

                                </div>
                            </FadeIn>
                        </div>
                        <div
                            className={"mt-5"}
                            style={{
                                background: "",
                                padding: "15px",
                                borderRadius: "10px"
                            }}
                        >
                            <FadeIn>
                                <div className={"title"}>
                                    In terms of tech...
                                </div>
                            </FadeIn>
                            <FadeIn>
                                <div>
                                    <Collapsible trigger={getString(4)} onOpening={() => setOpen4(!open4)} onClosing={() => setOpen4(!open4)}>
                                        <div className={"pl-3 mb-3 mt-2"} style={{background: "#61E294", borderRadius: "5px", padding: "5px"}}>
                                            <div>
                                                File Calculator: Calculate the size of a folder's contents recursively, using non-parallel threads, and using parallel threads.
                                            </div>
                                            <div>
                                                Morse: Encode & decode Morse code.
                                            </div>
                                            <div>
                                                Mandelbrot: Generate a Mandelbrot image.
                                            </div>
                                            <div>
                                                Project 1: Implement 2D matrix multiplication & summing the first n prime numbers.
                                            </div>
                                            <div>
                                                Project 2: Implement of Vector and ListNode & simple games using HashMap and HashSet.
                                            </div>
                                            <div>
                                                Project 3: Process any iterator and write contents into any stream.
                                            </div>
                                            <div>
                                                Project 4: Simulate "ls -l" command to show file type, file permissions, number of hard links, file owner, file group, file size, and file name.
                                            </div>
                                            <div>
                                                <a href={"https://github.com/lorneez/cpp-practice"}>
                                                    Checkout the Github
                                                </a>
                                            </div>
                                            <div>
                                                Coming soon: Simulation of "chmod"
                                            </div>
                                        </div>
                                    </Collapsible>
                                </div>
                                <div>
                                </div>
                            </FadeIn>
                            <FadeIn>
                                <div>
                                    <Collapsible trigger={getString(5)} onOpening={() => setOpen5(!open5)} onClosing={() => setOpen5(!open5)}>
                                        <div className={"pl-3 mb-3 mt-2"} style={{background: "#61E294", borderRadius: "5px", padding: "5px"}}>
                                            <div>
                                                Learning: Cognito, CloudWatch
                                            </div>
                                            <div>
                                                Using: Route 53, Amplify, DynamoDB, Lambda, API Gateway
                                            </div>
                                        </div>
                                    </Collapsible>
                                </div>
                                <div>
                                </div>
                            </FadeIn>
                            <FadeIn>
                                <div>
                                    <Collapsible trigger={getString(6)} onOpening={() => setOpen6(!open6)} onClosing={() => setOpen6(!open6)}>
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
                            </FadeIn>
                            <FadeIn>
                                <div>
                                    <Collapsible trigger={getString(7)} onOpening={() => setOpen7(!open7)} onClosing={() => setOpen7(!open7)}>
                                        <div className={"pl-3 mb-3 mt-2"} style={{background: "#61E294", borderRadius: "5px", padding: "5px"}}>
                                            <div>
                                                Duke CompSci 474
                                            </div>
                                            <div className={"pl-5"}>
                                                - Used HIV DNA sequence data to predict interferon sensitivity levels and extract important sequence regions. Implemented cross validation and hyper tuning of tree models (decision trees, random forests, and gradient boosted) and analyzed both base pair and protein level sequences to provide a list of protein and offsets for guiding future lab experiments.
                                            </div>
                                            <div className={"pl-5"}>
                                                - Competed in the IEEE Data Fusion Contest Track DSE to detect human settlements without electricity given 98 different channels of satellite data. Worked with FCN models, pretrained ResNet50 models, decision trees.
                                            </div>
                                            <div>
                                                Custom modified logistic regression model
                                            </div>
                                            <div>
                                                Keras Cifar-10 app
                                            </div>
                                        </div>
                                    </Collapsible>
                                </div>
                            </FadeIn>
                        </div>
                        <div
                            className={"mt-5"}
                            style={{
                                background: "",
                                padding: "15px",
                                borderRadius: "10px"
                            }}
                        >
                            <FadeIn>
                                <div className={"title"}>
                                    Current endeavors...
                                </div>
                            </FadeIn>
                            <FadeIn>
                                <div>
                                    Lorne is reading&nbsp;<a href={"https://en.wikipedia.org/wiki/The_Power_of_Now"} style={{fontWeight: "bold", fontStyle: "", color: "#61E294"}}>The Power of Now</a>&nbsp;by Eckhart Tolle.
                                </div>
                            </FadeIn>
                            <FadeIn>
                                <div>
                                    Lorne has started using&nbsp;<a href={"https://www.notion.so/product?utm_source=google&utm_campaign=2075789710&utm_medium=80211061601&utm_content=500427479647&utm_term=notion&targetid=aud-840164194020:kwd-312974742&gclid=CjwKCAjwhYOFBhBkEiwASF3KGcBLaV_4tbYg5O2aQBVK4ezbf4WVz8jUzhWLirG9Xf0JBE1UIFOpUhoCp6cQAvD_BwE"} style={{fontWeight: "bold", fontStyle: "", color: "#61E294"}}>Notion</a>&nbsp;to organize and track his daily life.
                                </div>
                            </FadeIn>
                            <FadeIn>
                                <div>
                                    Lorne got a new gym membership at&nbsp;<a href={"https://www.snapfitness.com/us/"} style={{fontWeight: "bold", fontStyle: "", color: "#61E294"}}>Snap Fitness</a>.
                                </div>
                            </FadeIn>
                            <FadeIn>
                                <div>
                                    Lorne is listening to&nbsp;<a href={"https://open.spotify.com/show/19TdDBlFkqh7uevYO0jFSW"} style={{fontWeight: "bold", fontStyle: "", color: "#61E294"}}>Ed Mylett</a>&nbsp;on Spotify.
                                </div>
                            </FadeIn>
                        </div>
                        <div className={"mt-5"} style={{padding: "15px"}}>
                            Developed with React, Bulma, AWS. Last updated&nbsp;<span style={{fontWeight: "bold", fontStyle: "", color: "#61E294"}}>05/30/2021</span>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;