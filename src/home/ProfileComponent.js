import React from "react";
import Lorne from "./IMG_9584.jpeg";
import TextLoop from "react-text-loop";

function ProfileComponent() {
  return (
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
          color: "#61E294",
        }}
      >
        Lorne Zhang
      </div>
      <figure
        className="image"
        style={{ height: "300px", width: "240px", borderRadius: "10px" }}
      >
        <img className="is-3by4" src={Lorne} style={{ borderRadius: "10px" }} />
      </figure>
      <div
        className={"block"}
        style={{
          fontSize: "30px",
        }}
      >
        <TextLoop>
          <span style={{ color: "#61E294" }}>Engineer @ TikTok</span>
          <span style={{ color: "#61E294" }}>Duke Alumni</span>
          <span style={{ color: "#61E294" }}>Eagle Scout</span>
          <span style={{ color: "#61E294" }}>Fitness Enthusiast</span>
          <span style={{ color: "#61E294" }}>Casual Handyman</span>
          <span style={{ color: "#61E294" }}>Cat Lover</span>
          <span style={{ color: "#61E294" }}>Mediocre Cook</span>
        </TextLoop>{" "}
      </div>
      <div>
        \ ˈlȯrn \ pronounced like "corn" with an "L", just like Lorne Micheals
        from Saturday Night Live.
      </div>
    </div>
  );
}

export default ProfileComponent;
