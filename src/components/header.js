import React from "react";

const styles = {
  card: {
    margin: 20,
    // background: "#b71774c2",
  },
  heading: {
    background: "#b71774c2",
    backgroundImage: "./assets/image3.jpg"
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "2rem",
    color: "purple",
    padding: "0 20px",
  },
};

function header() {

  return (
    <div style={styles.card}>
      <div style={styles.heading}> RACHEL KINCAID </div>
    </div>
  );
}

export default header;
