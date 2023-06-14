import React from 'react'
import { Link } from 'react-router-dom';
export function RegistrationForm() {
    return (


<>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <link
    rel="icon"
    type="image/jpg"
    href="https://mystudyindia.com/storage/colleges/logos/jX7726_1622047579.webp"
  />
  <title>Registration Form</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        'body {\n    font-family: Arial, sans-serif;\n    background-color: rgb(243, 242, 240);\n    padding: 20px;\n    \n  }\n\n  header{\n    position:  sticky;\n    top:0%;\n    margin-right: 25%;\n    width: 100%;\n    background-color: #9cd29e;\n  }\n  details>summary{\n    list-style: none;\n  }\n  \n  .navbar {\n    list-style-type: none;\n    margin-top: 4%;\n    padding: 0;\n    display: flex;\n    width: 99.50%;\n    height: 25px;\n    background-color: #cce8ec;\n    border-radius: 40px;\n    font-size: 27px;\n    position: fixed;\n    justify-content: space-evenly;\n    align-items: center;\n    font-weight: bold;\n\n    \n  }\n  \n  .navbar summary li {\n    margin: 0 10px;\n  \n    \n  }\n  \n  .navbar  a {\n    text-decoration: none;\n    padding: 12px;\n    border-radius: 40px;\n    color: #333;\n    transition: float 0.3s ease;\n  }\n  \n  .navbar a.active,\n  .navbar a:hover {\n    background-color: #333;\n    color: #fff;\n    float: left;\n    \n  }\n  \n  \n  \n  .navbar a:hover {\n    background-color: #c4eef4;\n    color: rgb(194, 17, 17);\n    float: left;\n  }\n  @media only screen and (max-width: 200px){\n    .navbar{\n      float: left;\n    }\n  }\n\nheader{\n    position: fixed;\n    top:0%;\n    width: 100%;\n    background-color: #9cd29e;\n    \n}\n.custom-logo {\n    max-height: 100px;\n    width: 80%;\n   margin-left: 10%;   \n}\n  \nh1 {\n    margin-top: 145px;\n    text-align: center;\n    position: static;\n    \n}\nselect{\n    width: 65px;\n    height: 25px;\n    background-color: #373731;\n    color: #fff;\n    border: none;\n    border-radius: 4px;\n    margin-top: 10px;\n    cursor: pointer;\n    transition: background-color 0.3s ease, transform 0.3s ease;\n}\n  \nform {\n    max-width: 410px;\n    margin: 0 auto;\n    background-color: #ffffff;\n    padding: 20px;\n    border: 1px solid #dddddd;\n    border-radius: 5px;\n}\n  \nlabel {\n    display: block;\n    font-weight: bold;\n    margin-bottom: 5px;\n}\n  \ninput[type="text"],\ninput[type="email"] {\n    width: 90%;\n    padding: 10px;\n    margin-bottom: 15px;\n    border: 1px solid #dddddd;\n    border-radius: 4px;\n    transition: border-color 0.3s ease-in-out;\n}\n  \ninput[type="text"]:focus,\ninput[type="email"]:focus {\n    border-color: #4CAF50;\n}\n  \nbutton[type="submit"] {\n    width: 100px;\n    height: 30px;\n    background-color: #333;\n    color: #fff;\n    border: none;\n    border-radius: 4px;\n    margin-top: 10px;\n    cursor: pointer;\n    transition: background-color 0.3s ease, transform 0.3s ease;\n}\n.container{\n    display: flex;\n    flex-wrap: wrap;\n}\n.box:nth-of-type(){\n    background-color: aqua;\n}\n.box:nth-of-type(0){\n    order: 1;\n}\n.box:nth-of-type(1){\n    order: 2;\n}\n  \n  button[type="submit"]:hover {\n    background-color: #c04444;\n      transform: scale(1.1);\n  }\n  .l {\n    animation: pulse 1s infinite;\n  }\n  \n  @keyframes pulse {\n    0% {\n      transform: scale(1);\n    }\n    50% {\n      transform: scale(1.2);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n\n  .radio-inline {\n    display: inline-block;\n    margin-right: 10px;\n}\n\n.radio-inline input[type="radio"] {\n  background-color: #c04444;\n  transform: scale(1.1);\n\n}\n\n.radio-inline label {\n    display: inline-block;\n    cursor: pointer;\n    padding: 5px 10px;\n    border: 1px solid rgb(150, 150, 159);\n    color: blue;\n}\n\n.radio-inline input[type="radio"]:checked + label {\n    background-color: blue;\n    color: rgb(164, 47, 47);\n}\n\n\n       \n        \n       '
    }}
  />
  <header>
    <img
      src="https://gatesit.ac.in/wp-content/uploads/2022/09/Gates-Institute-logo.png"
      width={1650}
      height={100}
      className="custom-logo"
      alt="Gates"
      decoding="async"
      srcSet="https://gatesit.ac.in/wp-content/uploads/2022/09/Gates-Institute-logo.png 688w, https://gatesit.ac.in/wp-content/uploads/2022/09/Gates-Institute-logo-300x44.png 300w, https://gatesit.ac.in/wp-content/uploads/2022/09/Gates-Institute-logo-360x52.png 360w"
      sizes="(max-width: 688px) 100vw, 688px"
    />
  </header>
  <nav>
    <br />
    <ul className="navbar">
      <li>
        <Link to="home">HOME</Link>
      </li>
      <li>
        <details>
          <summary>
            <a>LOGIN</a>
          </summary>
          
          <li>
      < Link to="student">STUDENT LOGIN</Link>
    </li>
    <li>
      <Link to="admin">ADMIN LOGIN</Link>
    </li>
    <li>
      <Link to="coordinator">COORDINATOR LOGIN</Link>
    </li>

</details>
      </li>
      <li>
      <Link to="about">ABOUT US</Link>
    </li>
    </ul>
  </nav>
  <h1>
    <b>Registration Form</b>
  </h1>
  <form action="thanks.html">
    <fieldset>
      <label className="radio-inline" htmlFor="online">
        <input
          type="radio"
          className="radio"
          name="group"
          id="online"
          defaultValue="online"
        />
        Online
      </label>
      <label className="radio-inline" htmlFor="offline">
        <input
          type="radio"
          className="radio"
          name="group"
          id="offline"
          defaultValue="offline"
        />
        Offline
      </label>
    </fieldset>
    <br />
    <label htmlFor="RegistrationNumber">
      <b>Registration Number</b>
    </label>
    <br />
    <input
      type="text"
      id="RegistrationNumber"
      placeholder="Enter your Reg. No"
      required=""
    />
    <br />
    <label htmlFor="FirstName">
      <b>First Name</b>
    </label>
    <br />
    <input type="text" id="FirstName" placeholder="First Name" required="" />
    <br />
    <label htmlFor="LastName">
      <b>Last Name</b>
    </label>
    <br />
    <input type="text" id="LastName" placeholder="Last Name" required="" />
    <br />
    <label htmlFor="Branch">
      <b>Branch</b>
    </label>
    <br />
    <input type="text" id="Branch" placeholder="Branch" required="" />
    <br />
    <div className="container">
      <div className="box">
        <label htmlFor="Domain">
          <b>Domain</b>
        </label>
        <br />
        <input type="text" id="Domain" placeholder="Domain" />
        <br />
      </div>
    </div>
    <label htmlFor="Year">
      <b>Year</b>
    </label>
    <br />
    <input type="text" id="Year" placeholder="Year" required="" />
    <br />
    <label htmlFor="Email">
      <b>Email</b>
    </label>
    <br />
    <input type="email" id="Email" placeholder="Email" required="" />
    <br />
    <p>
      <i>NOTE: If you have a Certification on Internship, upload it here</i>
    </p>
    <input type="file" id="myfile" name="filename" />
    <button type="submit" className="l">
      Register
    </button>
  </form>
</>
    )
}