import React from 'react'
import { Link } from 'react-router-dom';

export function Home() {
    return (

<>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    rel="Website Icon"
    type="jpg"
    href="https://mystudyindia.com/storage/colleges/logos/jX7726_1622047579.webp"
  />
  <title>HOME PAGE</title>

  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n  body{position:  sticky ;background-color: rgb(243, 242, 240);} \nheader{top:0%;width: 100%;background-color: #9cd29e;}\n.custom-logo {max-height: 100px;width: 80%;margin-left: 10%;}\n.navbar {\n    list-style-type: none;\n    margin-top: 0%;\n    padding: 0;\n    display: flex;\n    width: 99.50%;\n    height: 25px;\n    background-color: #cce8ec;\n    border-radius: 40px;\n    font-size: 22px;\n    position: relative;\n    justify-content: space-evenly;\n    align-items: center;\n    font-weight: bold; \n  }\n  .navbar summary li {\n    margin: 0 10px;\n   \n  }\n  \n  .navbar  a {\n    text-decoration: none;\n    padding: 15px;\n    border-radius: 400px;\n    color: #333;\n    transition: float 0.3s ease;\n    \n  }\n  \n  .navbar a.active,\n  .navbar a:hover {\n    background-color: #333;\n    color: #fff;\n    float: top;\n  }\n  \n  \n  \n  .navbar a:hover {\n    background-color: #c4eef4;\n    color: rgb(194, 17, 17);\n    float: top;\n  }\n  @media only screen and (max-width: 200px){\n    .navbar{\n      float: top;\n    }\n  }\n  \n  p { \n    color: #d62f2f;\n    font-style: initial;\n    display: flex;\n    justify-content: center;\n    align-items:center;\n    font-size: 40px;\n    font-feature-settings: "abvf";\n    margin-top: 40px;\n    padding-top: 0px;\n    overflow: hidden; \n    white-space: nowrap; \n    animation: scrollText 20s linear infinite; \n    animation-play-state: 1s;\n\n  }\n\n\n .title{\n  font-size: 60px;\n  font-weight: bolder;\n  border: 1px solid rgb(211, 203, 203);\n  background-color: #d62f2f;\n  color: #f8fcfc;\n }\n\n .container{\n  border: 1px solid rgb(235, 232, 232);\n  width: 240px;\n  height: auto;\n  margin-left: 5%;\n  background-color: #f3e5e5;\n  margin-top: 0;\n  border-radius: 40px;\n  align-items: center;\n \n  \n }\n .branch{\n  \n  font-size: 29px;\n  font-weight: bolder;\n  \n \n  \n }\n .branch1{\n  list-style-type: none;\n \n }\n .main-page{\n  display: flex;\n }\n .tech{\n  border: 1px solid rgb(235, 232, 232);\n  width: auto;\n  height: 650px;\n  margin-left: 55%;\n  background-color: #f3e5e5;\n  margin-top: 1%;\n  border-radius: 40px;\n  align-items: center;\n \n  \n }\n .branch1{\n  \n  font-size: 29px;\n  font-weight: bolder;\n  \n \n  \n }\n .branch2{\n  list-style-type: none;\n \n }\n  center{\n position:relative;\n top:100px;\n \n left:-1030px;}\n\n'
    }}
  />
  <header>
    <img
      width={1650}
      height={100}
      src="https://gatesit.ac.in/wp-content/uploads/2022/09/Gates-Institute-logo.png"
      className="custom-logo"
      alt="Gates"
      decoding="async"
      srcSet="https://gatesit.ac.in/wp-content/uploads/2022/09/Gates-Institute-logo.png 688w, https://gatesit.ac.in/wp-content/uploads/2022/09/Gates-Institute-logo-300x44.png 300w, https://gatesit.ac.in/wp-content/uploads/2022/09/Gates-Institute-logo-360x52.png 360w"
      sizes="(max-width: 688px) 100vw, 688px"
    />
  </header>
  <br />
  <ul className="navbar">
    <li>
      <Link to="/student">STUDENT LOGIN</Link>
    </li>
    <li>
      <Link to="/admin">ADMIN LOGIN</Link>
    </li>
    <li>
      <Link to="/coordinator">COORDINATOR LOGIN</Link>
    </li>
    <li>
      <Link to="/about">ABOUT US</Link>
    </li>
  </ul>
  <p>
    <b>
      <i>WELCOME TO STUDENT INTERNSHIP PORTAL</i>
    </b>
  </p>
  <div className="main-page">
    <div className="container">
      {" "}
      {/* branches wise internship details */}
    <h1 className="title">Branch</h1>
      <ul className="branch1">
        <li>
          <a className="branch">MCA</a>
        </li>
        <br />
        <li>
          <a className="branch">MBA</a>
        </li>
        <br />
        <li>
          <a className="branch">ECE</a>
        </li>
        <br />
        <li>
          <a className="branch">EEE</a>
        </li>
        <br />
        <li>
          <a className="branch">CSE</a>
        </li>
        <br />
        <li>
          <a className="branch">CSE-AI</a>
        </li>
        <br />
        <li>
          <a className="branch">CSE-CS</a>
        </li>
        <br />
        <li>
          <a className="branch">CSE-DS</a>
        </li>
        <br />
        <li>
          <a className="branch">MECH</a>
        </li>
        <br />
        <li>
          <a className="branch">CIVIL</a>
        </li>
      </ul>
    </div>
    
    <div className="tech">
      {" "}
      {/* branches wise internship details */}
      <h1 className="title">Technology</h1>
      <ul className="branch2">
        <li>
          <a className="branch1">FULL STACK</a>
        </li>
        <br />
        <li>
          <a className="branch1">JAVA</a>
        </li>
        <br />
        <li>
          <a className="branch1">C</a>
        </li>
        <br />
        <li>
          <a className="branch1">C++</a>
        </li>
        <br />
        <li>
          <a className="branch1">PYTHON</a>
        </li>
        <br />
        <li>
          <a className="branch1">JS</a>
        </li>
        <br />
        <li>
          <a className="branch1">HTML/CSS</a>
        </li>
        <br />
        <li>
          <a className="branch1">OTHERS</a>
        </li>
        <br />
      </ul>
    </div>
    <center><img src="https://tse1.mm.bing.net/th?id=OIP.8o05l91elg22joOt28QhJQAAAA&pid=Api&P=0&h=180" height="400px" width="600px" >
</img>
    </center>
    </div>
</>
)
}
