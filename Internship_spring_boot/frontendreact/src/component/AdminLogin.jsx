import React from 'react'
import { Link } from 'react-router-dom';
export function AdminLogin() {
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
  <title>STUDENT PORTAL PAGE</title>
  
  <style
    dangerouslySetInnerHTML={{
      __html:
        'body{\n    background-color: rgb(243, 242, 240);\n    padding: 10px;\n  }\n  \n    \n  .container {\n    width: 500px; \n    margin: 0 auto;\n    text-align: center;\n  }\n  \n  \n  \n  \n  header{\n    position: fixed sticky;\n    top:0%;\n    margin-right: 25%;\n    width: 100%;\n    background-color: #9cd29e;\n  }\n    .custom-logo {\n      max-height: 100px;\n      width: 80%;\n     margin-left: 10%;   \n  }\n    \n    h1 {\n      color: #1e1616;\n      font-size: 28px;\n      margin-top: 25px;\n      padding-top: 105px;\n  \n    }\n    #GFG{\n      text-decoration: none;\n    }\n    .password{\n      padding-bottom: 20px;\n    }\n    .staff{\n      margin-top: 1%;\n    }\n    h2 {\n      color: #1e1616;\n      font-size: 18px;\n      margin-top: 20px;\n      padding-top: 10px;\n      overflow: hidden; \n      white-space: nowrap; \n      animation: scrollText 20s linear infinite; \n      animation-play-state: 1s;\n      position: initial;\n  \n  \n    }\n    \n    @keyframes scrollText {\n      0% {\n        transform: translateX(100%); \n      }\n      100% {\n        transform: translateX(-100%); \n      }\n    }\n    \n    \n    form {\n      margin-top: 0px;\n      position: relative;\n       \n      \n    }\n    \n    label {\n      display: block;\n      margin-bottom: 10px;\n      font-weight: bold;\n      color: #171616;\n      font-size: 23px;\n    }\n    \n    input[type="text"],\n    input[type="password"], \n    input[type="email"] \n     {\n      width: 300px;\n      height: 30px;\n      border: 1px solid #ccc;\n      border-radius: 4px;\n      padding: 4px;\n      transition: border-color 0.3s ease;\n    }\n    \n    input[type="text"]:focus,\n    input[type="email"]:focus,\n    input[type="password"]:focus{\n      border-color: #555;\n    }\n    button[type="forget"],\n    button[type="signup"] {\n      margin-bottom: 0.55%;\n      margin-left: 0%;\n      width: 67px;\n      height: 25px;\n      background-color: #333;\n      color: #fff;\n      border: none;\n      border-radius: 4px;\n      margin-top: 10px;\n      cursor: pointer;\n      transition: background-color 0.3s ease, transform 0.3s ease;\n    }\n    button[type="login"],\n    button[type="signup"],\n    button[type="sign up"]{\n      width: 100px;\n      height: 30px;\n      background-color: #333;\n      color: #fff;\n      border: none;\n      border-radius: 4px;\n      margin-top: 10px;\n      cursor: pointer;\n      transition: background-color 0.3s ease, transform 0.3s ease;\n    }\n    \n    button[type="login"]:hover,\n    button[type="sign up"]:hover,\n    button[type="forget"]:hover {\n      background-color: #c04444;\n      transform: scale(0.95);\n    }\n    \n    .p {\n      margin-top: 5px;\n      max-width: 410px;\n      height: auto;\n      margin: 0 auto;\n      background-color: #ffffff;\n      padding: 45px;\n      border: 1px solid #dddddd;\n      border-radius: 6px;\n    }\n   \n    details>summary{\n      list-style: none;\n    }\n    \n    .navbar {\n      list-style-type: none;\n      margin-top: 1%;\n      padding: 0;\n      display: flex;\n      width: 99.50%;\n      height: 25px;\n      background-color: #cce8ec;\n      border-radius: 40px;\n      font-size: 27px;\n      position: relative sticky;\n      justify-content: space-evenly;\n      align-items: center;\n      font-weight: bold;\n  \n      \n    }\n    \n    .navbar summary li {\n      margin: 0 10px;\n    \n      \n    }\n    \n    .navbar  a {\n      text-decoration: none;\n      padding: 12px;\n      border-radius: 40px;\n      color: #333;\n      transition: float 0.3s ease;\n    }\n    \n    .navbar a.active,\n    .navbar a:hover {\n      background-color: #333;\n      color: #fff;\n      float: left;\n      \n    }\n    \n    \n    \n    .navbar a:hover {\n      background-color: #c4eef4;\n      color: rgb(194, 17, 17);\n      float: left;\n    }\n    @media only screen and (max-width: 200px){\n      .navbar{\n        float: left;\n      }\n    }\n  \n    \n    .l {\n      animation: pulse 1s infinite;\n    }\n    \n    @keyframes pulse {\n      0% {\n        transform: scale(1);\n      }\n      50% {\n        transform: scale(1.2);\n      }\n      100% {\n        transform: scale(1);\n      }\n    }\n    /*  */\n    '
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
  <nav>
    <ul className="navbar">
      <li>
        <Link to="/">HOME</Link>
      </li>
      {/* <li>
        <details>
          <summary>
            <a>LOGIN</a>
          </summary>
          <li>
      < Link to="student">STUDENT LOGIN</Link>
    </li>
    <li>
      <Link to="coordinator">COORDINATOR LOGIN</Link>
    </li>
    
        </details>
      </li> */}
      <li>
        <Link to="/about">ABOUT US</Link>
      </li>
    </ul>
  </nav>
  <div className="container">
    <h1>WELCOME TO ADMIN PORTAL!</h1>
    <div className="p">
      <label htmlFor="REGISTRATION NUMBER" className="REGISTRATION">
        <b>Email</b>
      </label>
      <br />
      <input
        type="text"
        id="REGISTRATION NUMBER"
        placeholder="Enter Registraton Number or Email"
        required=""
      />
      <br />
      <br />
      <label htmlFor="password">
        <b>Password</b>
      </label>
      <br />
      <br />
      <input
        type="password"
        placeholder="Enter Password"
        id="password"
        minLength={8}
        required=""
      />
      <br />
      <br />
      <br />
      <button type="login">
        <b>
          <div className="l">Login</div>
        </b>
      </button>
      <br />
  
      <br />
    </div>
</div>
</>
    )
}

