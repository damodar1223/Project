import React from 'react'
import { Link } from 'react-router-dom';
export function Forgot() {
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
  <title>RESET YOUR PASSWORD</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '  body {\n    font-family: Arial, sans-serif;\n    background-color: rgb(243, 242, 240);\n    padding: 20px;\n  }\n \n  header{\n    position:  sticky;\n    top:0%;\n    margin-right: 25%;\n    width: 100%;\n    background-color: #9cd29e;\n  }\n  details>summary{\n    list-style: none;\n  }\n  \n  .navbar {\n    list-style-type: none;\n    margin-top: 0%;\n    padding: 0;\n    display: flex;\n    width: 99.50%;\n    height: 25px;\n    background-color: #cce8ec;\n    border-radius: 40px;\n    font-size: 22px;\n    font-weight: bold;\n    position: fixed;\n    justify-content: space-evenly;\n    align-items: center;\n    \n    \n    \n  }\n  \n  .navbar summary li {\n    margin: 0 10px;\n  }\n  \n  .navbar  a {\n    text-decoration: none;\n    padding: 8px;\n    border-radius: 40px;\n    color: #333;\n    transition: float 0.3s ease;\n  }\n  \n  .navbar a.active,\n  .navbar a:hover {\n    background-color: #333;\n    color: #fff;\n    float: left;\n  }\n  \n  \n  \n  .navbar a:hover {\n    background-color: #c4eef4;\n    color: rgb(194, 17, 17);\n    float: left;\n  }\n  @media only screen and (max-width: 200px){\n    .navbar{\n      float: left;\n    }\n  }\n\n  \n  .l {\n    animation: pulse 1s infinite;\n  }\n  \n  @keyframes pulse {\n    0% {\n      transform: scale(1);\n    }\n    50% {\n      transform: scale(1.2);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n\n\n  header{\n    position: fixed sticky;\n    top:0%;\n    margin-right: 25%;\n    width: 100%;\n    background-color: #9cd29e;\n  }\n  .custom-logo {\n    max-height: 100px;\n    width: 80%;\n   margin-left: 10%;   \n  }\n \n  h1 {\n    margin-top: 125px;\n    text-align: center;\n  }\n   \n  form {\n    max-width: 400px;\n    margin: 0 auto;\n    background-color: #ffffff;\n    padding: 25px;\n    border: 1px solid #dddddd;\n    border-radius: 5px;\n    animation: fade-in 0.5s ease-in-out;\n  }\n  \n  @keyframes fade-in {\n    from {\n      opacity: 0;\n      transform: translateY(-10px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n  \n  label {\n    display: block;\n    font-weight: bold;\n    margin-bottom: 5px;\n  }\n  \n  input[type="password"],\n  input[type="contact number"],\n  input[type="otp"] {\n    width: 90%;\n    padding: 8px;\n    margin-bottom: 15px;\n    border: 1px solid #dddddd;\n    border-radius: 4px;\n  }\n  \n  input:invalid {\n    animation: shake 0.5s;\n  }\n  \n  @keyframes shake {\n    0% {\n      transform: translateX(-5px);\n    }\n    50% {\n      transform: translateX(5px);\n    }\n    100% {\n      transform: translateX(-5px);\n    }\n  }\n  \n  button[type="reset"] {\n   \n      width: 200px;\n      height: 40px;\n      background-color: #333;\n      color: #fff;\n      border: none;\n      border-radius: 4px;\n      margin-top: 0px;\n      cursor: pointer;\n      transition: background-color 0.3s ease, transform 0.3s ease;\n    }\n  button[type="reset"]:hover {\n    background-color: #c04444;\n      transform: scale(1.1);\n  }\n  .send{\n    margin-left: 60%;\n    margin-top: 0%;\n    padding: 0;\n  }\n  button[type="send"] {\n    width: 100px;\n    height: 40px;\n    background-color: #333;\n    color: #fff;\n    border: none;\n    border-radius: 4px;\n    margin-top: 0px;\n    cursor: pointer;\n    margin-left: 69%;\n    transition: background-color 0.3s ease, transform 0.3s ease;\n  }\n  \n  button[type="send"]:hover {\n    background-color: #c04444;\n      transform: scale(1.1);\n  }\n\n  '
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
    <br />
    <ul className="navbar">
      <li>
        <a href="/">HOME</a>
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
      <Link to="admin">ADMIN LOGIN</Link>
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
  <h1 className="re">RESET YOUR PASSWORD</h1>
  <form action="">
    <label htmlFor="new password">New password</label>
    <br />
    <br />
    <input
      type="password"
      placeholder="Enter New Password"
      id="new password"
      minLength={8}
      required=""
    />
    <br />
    <br />
    <br />
    <label htmlFor="confirm password">Confirm New password</label>
    <br />
    <br />
    <input
      type="password"
      placeholder="Confirm New Password"
      id="confirm password"
      minLength={8}
      required=""
    />
    <br />
    <label htmlFor="Number">EMAIL</label>
    <br />
    <br />
    <input
      type="contact number"
      placeholder="10-Digit_Number"
      id="Number"
      minLength={10}
      required=""
    />
    <br />
    <br />
    <br />
    <button type="send" className="send">
      Send OTP
    </button>
    <br />
    <label htmlFor="otp">OTP</label>
    <br />
    <br />
    <input type="otp" placeholder="OTP" id="OTP" minLength={4} required="" />
    <br />
    <br />
    <br />
    <button type="reset">Reset Password</button>
    <br />
  </form>
</>
    )
}