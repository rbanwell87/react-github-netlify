import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <small>
        <a
          className="Github-link"
          href="https://github.com/rbanwell87/react-github-netlify/settings"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>{" "}
        by Robin Banwell
      </small>
    </div>
  );
}
