import React, { useState } from "react";
import Collapsible from "react-collapsible";
import "../App.css";
import ProfileComponent from "./ProfileComponent";
import FadeIn from "react-fade-in";

function HomePage() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);

  function getString(num) {
    switch (num) {
      case 1:
        return open1
          ? "⬆️ Sparrow Labs: Software Engineer"
          : "⬇️ Sparrow Labs: Software Engineer";
      case 2:
        return open2
          ? "⬆️ Sparrow Lending: Software Engineering Intern"
          : "⬇️ Sparrow Lending: Software Engineering Intern";
      case 3:
        return open3
          ? "⬆️ Capital One: Software Engineer Intern"
          : "⬇️ Capital One: Software Engineer Intern";
      case 4:
        return open4
          ? "⬆️ Lorne is passionate about blockchain technology."
          : "⬇️ Lorne is passionate about blockchain technology.";
      default:
        return "";
    }
  }

  return (
    <div
      className={"home"}
      style={{
        background: "white",
        color: "black",
        width: "100vw",
        minHeight: "100vh",
      }}
    >
      <div className={"container p-3"}>
        <div className={"columns"}>
          <div className={"column"}>
            <ProfileComponent />
          </div>
          <div className={"column is-two-thirds"}>
            <div
              className={"mt-3"}
              style={{
                background: "",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <FadeIn>
                <div className={"title"}>
                  This is what Lorne has been up to...
                </div>
              </FadeIn>
              <FadeIn>
                <div>
                  <Collapsible
                    trigger={getString(1)}
                    onOpening={() => setOpen1(!open1)}
                    onClosing={() => setOpen1(!open1)}
                  >
                    <div
                      className={"pl-3 mb-3 mt-2"}
                      style={{
                        background: "#61E294",
                        borderRadius: "5px",
                        padding: "5px",
                      }}
                    >
                      <div>Backend, AWS</div>
                      <div>June 2022 - Present</div>
                      <div className={"pl-5"}>
                        - Designed and built out a data anlytics platform
                        (Crest) using{" "}
                        <span style={{ fontStyle: "italic", color: "" }}>
                          OpenSearch/AWS/React/Redux
                        </span>{" "}
                        to provide Credit Unions / Affiliates with real time
                        data analysis for leveraging student loan products for
                        business insights.
                      </div>
                      <div className={"pl-5"}>
                        - Built and maintained Credit file XML parser utilizing{" "}
                        <span style={{ fontStyle: "italic", color: "" }}>
                          Java
                        </span>{" "}
                        to provide data for pre-qualification across 17+
                        lenders.
                      </div>
                      <div className={"pl-5"}>
                        - Built and maintained backend servers utilizing{" "}
                        <span style={{ fontStyle: "italic", color: "" }}>
                          TypeScript
                        </span>{" "}
                        to scale and accurately pre-qualify and facilitate over
                        $600M in student loan search volume.
                      </div>
                    </div>
                  </Collapsible>
                </div>
                <div className={"pl-6"}></div>
              </FadeIn>
              <FadeIn>
                <div>
                  <Collapsible
                    trigger={getString(2)}
                    onOpening={() => setOpen2(!open2)}
                    onClosing={() => setOpen2(!open2)}
                  >
                    <div
                      className={"pl-3 mb-3 mt-2"}
                      style={{
                        background: "#61E294",
                        borderRadius: "5px",
                        padding: "5px",
                      }}
                    >
                      <div>Backend, AWS</div>
                      <div>June 2021 - August 2021</div>
                      <div className={"pl-5"}>
                        - Mobile and backend development on the Capital One
                        Credit Wise service. Utilized{" "}
                        <span style={{ fontStyle: "italic", color: "" }}>
                          Python/AWS/Jenkin
                        </span>{" "}
                        to create a microservice for calling the Credit Wise API
                        and displaying the service using the Dynamic Tile
                        Engine.
                      </div>
                      <div className={"pl-5"}>
                        - Utilized{" "}
                        <span style={{ fontStyle: "italic", color: "" }}>
                          Charles
                        </span>{" "}
                        for mapping local API requests and ran unit, acceptance,
                        and linter tests.
                      </div>
                    </div>
                  </Collapsible>
                </div>
              </FadeIn>
              <FadeIn>
                <div>
                  <Collapsible
                    trigger={getString(3)}
                    onOpening={() => setOpen3(!open3)}
                    onClosing={() => setOpen3(!open3)}
                  >
                    <div
                      className={"pl-3 mb-3 mt-2"}
                      style={{
                        background: "#61E294",
                        borderRadius: "5px",
                        padding: "5px",
                      }}
                    >
                      <div>Website, Mobile, ML Teams</div>
                      <div>December 2020 - May 2022</div>
                      <div className={"pl-5"}>
                        - Implemented consumer credit pull and XML parsing in{" "}
                        <span style={{ fontStyle: "italic", color: "" }}>
                          Java
                        </span>{" "}
                        and{" "}
                        <span style={{ fontStyle: "italic", color: "" }}>
                          Lambda/DynamoDB
                        </span>{" "}
                        integration using{" "}
                        <span style={{ fontStyle: "italic", color: "" }}>
                          JavaScript
                        </span>{" "}
                        to provide a scalable and dynamic consumer credit model
                        for all integrated lending partners.
                      </div>
                      <div className={"pl-5"}>
                        - Previously designed modified logistic regression
                        classifier, deep neural network, and decision tree
                        models for predicting interest rate for student loans.
                      </div>
                      <div className={"pl-5"}>
                        - Previously architected authentication and Plaid
                        integration and implemented frontend pages utilizing{" "}
                        <span style={{ fontStyle: "italic", color: "" }}>
                          React
                        </span>{" "}
                        and{" "}
                        <span style={{ fontStyle: "italic", color: "" }}>
                          Firebase
                        </span>
                        .
                      </div>
                      <div className={"pl-5"}>
                        - Previously worked on V2 of iOS app in{" "}
                        <span style={{ fontStyle: "italic", color: "" }}>
                          SwiftUI
                        </span>
                        , implementing{" "}
                        <span style={{ fontStyle: "italic", color: "" }}>
                          Figma
                        </span>{" "}
                        designs and creating custom reusable components.
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
                borderRadius: "10px",
              }}
            >
              <FadeIn>
                <div className={"title"}>In terms of tech...</div>
              </FadeIn>
              <FadeIn>
                <div>
                  <Collapsible
                    trigger={getString(4)}
                    onOpening={() => setOpen4(!open4)}
                    onClosing={() => setOpen4(!open4)}
                  >
                    <div
                      className={"pl-3 mb-3 mt-2"}
                      style={{
                        background: "#61E294",
                        borderRadius: "5px",
                        padding: "5px",
                      }}
                    >
                      <div>
                        MEV bot: Lorne attempted to build a MEV bot without
                        prior knowledge of what MEV was. In the process of doing
                        this, he learned how to utilize code to interact with
                        the Ethereum blockchain, how MEV works, how GAS fees
                        translate to transaction speed, and the issues of
                        scalability in the Ethereum blockchain. Sadly, Lorne did
                        not implement a MEV bot that beats "industry standards",
                        but, in return, he gained an appreciation for smart
                        contract engineers and began moving to Solana...
                      </div>
                      <div>
                        Simple dApp: Lorne has played around in building basic
                        dApps to perform simple functions such as connecting a
                        wallet to a website.
                      </div>
                    </div>
                  </Collapsible>
                </div>
                <div></div>
              </FadeIn>
            </div>
            <div className={"mt-5"} style={{ padding: "15px" }}>
              Developed with React, Bulma, AWS. Last updated&nbsp;
              <span
                style={{ fontWeight: "bold", fontStyle: "", color: "#61E294" }}
              >
                12/18/2023
              </span>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
