import React from "react";

const footerStyle = {
  all: "initial", // Clears all parent CSS rules
  backgroundColor: "white",
  padding: "10px", // Adjust the padding to your desired thickness
  textAlign: "center",
};


const textStyles = {
  margin: "0", // Remove any default margin for the text
};

const Footer = () => (
  <footer style={footerStyle}>
    <p style={textStyles}>
      &copy; EnviroCloud 2023
    </p>
  </footer>
);

export default Footer;
