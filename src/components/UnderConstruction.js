import React from "react";
import "../styles/UnderConstruction.css";

function UnderConstruction() {
  return (
    <div className="construction">
      <div className="gradient"></div>

      <div className="card">
        <span className="badge">🚧 Portfolio Redesign</span>

        <h1>
          Hi, I'm <span>Hemnath</span>
        </h1>

        <h2>Software Engineer</h2>

        <p>
          I'm currently redesigning my portfolio to showcase my latest
          projects, skills, and experience.
        </p>

        <div className="progress">
          <div className="progress-fill"></div>
        </div>

        <div className="buttons">
          {/* <a href="/resume" className="btn primary">
            Resume
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            GitHub
          </a> */}

          <a
            href="https://www.linkedin.com/in/hemnath-m-a79998377"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Visit My LinkedIn Acc
          </a>
        </div>
      </div>
    </div>
  );
}

export default UnderConstruction;