import React from "react";

const styles = {
  card: {
    margin: 20,
    background: "#e8eaf6",
  },
  heading: {
    background: "#3f51b5",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
  },
  content: {
    padding: 20,
  },
};

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function home() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}> Home Page </div>
      <div style={styles.content}>
        Hi! My name is Rachel and I am a web developer located in Colorado. I
        began coding fairly recently but thanks to DU Bootcamp and their amazing
        staff and my fellow students, I can now count myself as a full stack web
        developer. I am building my portfolio currently and if you wish to see
        projects that I have worked on in the past, please follow the links
        below to explore those. Pretty exciting stuff here!
      </div>
    </div>
  );
}

export default home;
