import React from 'react'
import { Link } from 'react-router-dom';
export function About() {
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
  <title>ABOUT US</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        " \n    p{\n    font-size: 25px;\n    \n    \n}\n \n        \n    \n    .submit{\n        font-size: 20px;\n    }\n    \n    form{text-align: center;}\n    .gits{\n        color: red;\n        font-size: 55px;\n    }\n    .add,a{\n        font-size: 22px;\n    }\n   form{\n   display: block;\n    \n    justify-items: center;\n    align-items: center;\n    \n   }\n   details>summary{\n    list-style: none;\n  }\n  \n  .navbar {\n    list-style-type: none;\n    margin-top: 0%;\n    padding: 0;\n    display: flex;\n    width: 100px;\n    height: 27px;\n    background-color: #c4eef4;\n    border-radius: 0px;\n    border: 1px solid #c4eef4;\n    position: relative;\n    \n    \n  }\n  \n  details>summary{\n    list-style: none;\n  }\n  \n  .navbar {\n    list-style-type: none;\n    margin-top: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  \n  .navbar summary li {\n    margin: 0 10px;\n  }\n  \n  .navbar  a {\n    text-decoration: none;\n    padding: 8px;\n    border-radius: 40px;\n    color: #333;\n    transition: float 0.3s ease;\n  }\n  \n  .navbar a.active,\n  .navbar a:hover {\n    background-color: #333;\n    color: #fff;\n    float: left;\n  }\n  \n  \n  \n  .navbar a:hover {\n    background-color: #c4eef4;\n    color: rgb(25, 21, 21);\n    float: left;\n  }\n  @media only screen and (max-width: 200px){\n    .navbar{\n      float: left;\n    }\n  }\n\n  \n    \n  \n    "
    }}
  />
  <nav>
    <br />
    <ul className="navbar">
      <li>
        <Link to="/">Back</Link>
      </li>
    </ul>
  </nav>
  <form>
    <p className="gits">
      <b>GATES Institute Of Technology</b>
      <br />
    </p>
    <p className="add">
      {" "}
      N.H.44, Gooty, Anantapuram (Village),
      <br />
      Peddavadugur (M), Gooty - 515 401,
      <br />
      Anantapuram (Dist),
      <br />
      Andhra Pradesh, India
      <br />
    </p>
    <p>
      <a href="www.gatesit.ac.in">
        Website: www.gatesit.ac.in
        <br />
      </a>
      E-Mail: verification@gatesit.ac.in, infogatesit@gmail.com
      <br />
      Contact : +91 9032894787, +91 949 008 2001
      <br />
    </p>
    <pre>
      <b>{"    "}Developed by TEAM-MCA</b>
      {"\n"}
      {"    "}
      <h5>
        {"            "}ROTTELA PURUSHOTHAM YADAV{"\n"}
        {"    "}SHAIK JUBEDA BANU{"\n"}
        {"  "}MANJULA DAMODAR{"\n"}
        {"   "}PARATALA KUNDANA
      </h5>
      {"\n"}
      {"        "}
      {"\n"}
      {"       "}
    </pre>
  </form>
</>
)
}