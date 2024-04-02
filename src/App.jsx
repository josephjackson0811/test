import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container" style={{ textAlign: "left" }}>
        <div className="resume-name" style={{ fontSize: "50px" }}><b>Dong Liu</b></div>
        <div className="resume-role-title" style={{ fontSize: "25px" }}><b>Senior Front-end Engineer</b></div>
        <div className="resume-role-title">Shenyang, Liaoning, China, 110045</div>

        <br />

        Accomplished Front-end Engineer with 6 years of experience specializing in the React and
        Next.js ecosystem, and a proven track record in testing and performance optimization. Demonstrated leadership in guiding teams and implementing best practices in development.

        <br /><hr /><br />

        <div style={{ fontSize: "30px" }}><b>Professional Experience</b></div>
        <div style={{ fontSize: "20px" }}><b>Freelance</b></div>
        <div style={{ justifyContent: "space-between", display: "flex" }}>
          <span>Senior Front-end Engineer</span>
          <span>Apr 2023 – Present</span>
        </div>
        <div>
          <ul>
            <li>Led a team of 3 developers in the development of an innovative website leveraging
              Generative AI and Web3 technologies.</li>
            <li>Spearheaded the integration of Blockchain technology into the website's infrastructure to
              ensure data security and transparency</li>
            <li>Implemented advanced AI algorithms to enable users to generate custom images based
              on their prompts, enhancing user engagement and satisfaction.</li>
          </ul>
        </div>
        <div style={{ fontSize: "30px" }}><b>Professional Experience</b></div>
        <div style={{ fontSize: "10px" }}><b>&nbsp;</b></div>
        <div style={{ justifyContent: "space-between", display: "flex" }}>
          <span>Front-end Developer</span>
          <span>May 2020 – Mar 2023</span>
        </div>
        <div>
          <ul>
            <li>Led the front-end development of a smart price recommendations platform used by large retail
              and e-commerce clients.</li>
            <li>Implemented and managed companies' Design System library. Profiled critical
              components, eliminating wasting renders which dramatically improved performance.</li>
            <li>Simplified the project structure, emphasizing re-usability and scalability.</li>
          </ul>
        </div>
        <div style={{ fontSize: "30px" }}><b>QPSOFTWARE</b></div>
        <div style={{ fontSize: "10px" }}><b>&nbsp;</b></div>
        <div style={{ justifyContent: "space-between", display: "flex" }}>
          <span>Front-end Developer</span>
          <span>Oct 2017 – May 2020</span>
        </div>
        <div>
          <ul>
            <li>Refactored very large front-end application code to make it more modular and reusable. Wrote
              advanced jQuery Data Tables plugins and UX handling.</li>
            <li>Wrote form-based pages to dynamically change as data was entered and REST API was
              queried.</li>
            <li>Developed several filtering UX controls to allow users to quickly enter and review medical
              spending information.</li>
          </ul>
        </div>

        <br /><hr /><br />

        <div style={{ fontSize: "30px" }}><b>Skills</b></div>
        <div style={{ textIndent: "30px" }}>HTML, CSS, SCSS, Bootstrap, jQuery, Javascript, Typescript, React/Redux, Next.js</div>

        <br /><hr /><br />

        <div style={{ fontSize: "30px" }}><b>Education</b></div>
        <div style={{ textIndent: "30px", justifyContent: "space-between", display: "flex" }}>
          <span>Liaoning University at Beijing (Bachelor’s in Computer Science)</span>
          <span>2013 - 2017</span>
        </div>

      </div>
    </>
  )
}

export default App
