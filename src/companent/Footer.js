import React from "react";

const Footer = () => {
  const dates = new Date();
  const currentyear = dates.getFullYear();
  return (
    <footer>
      <p>Copyright@{currentyear}</p>
    </footer>
  );
};

export default Footer;
