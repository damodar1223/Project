//import logo from './logo.svg';
//import './App.css';
import { Routes, Route } from "react-router-dom"
import { StudentLogin } from './component/StudentLogin';
import { AdminLogin } from './component/AdminLogin';
import { CoordinatorLogin } from './component/CoordinatorLogin';
import { Home } from './component/Home';
import { RegistrationForm } from './component/RegistrationForm';
import { About } from "./component/About";
import { Forgot } from "./component/Forgot";
import { NewUser } from "./component/NewUser";

//import { About } from "./component/About";
//import { Forgot } from './component/Forgot';

function App() {
  return (
    <div className="App">
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

       <Routes>
           {/* <Route path="/" element={ <StudentLogin/> }/> 
           <Route path="/" element={ <AdminLogin/> } /> 
    <Route path="/" element={ <CoordinatorLogin/> } /> */}
    {/* <Route path="/" element={ <Home/> } />    */}
    <Route path="/" element={ <Home/> } />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    <Route path="about" element={ <About/> } />    
    
    <Route path="student" element={ <StudentLogin/> } />
    <Route path="student/forget" element={ <Forgot/> } /> 
    <Route path="admin" element={ <AdminLogin/> } /> 
    <Route path="coordinator" element={ <CoordinatorLogin/> } /> 
    <Route path="about" element={ <About/> } /> 
    {/* <Route path="student/home" element={ <Home/> } />  */}
    <Route path="student/newuser" element={ <NewUser/> } /> 
    {/* <Route path="student/login" element={ <RegistrationForm/> } />  */}
    {/* <Route path="student/about/home" element={ <Home/> } /> 
    

    <Route path="coordinator" element={ <CoordinatorLogin/> } />   
    <Route path="coordinator/student" element={ <StudentLogin/> } />   
    <Route path="coordinator/admin" element={ <AdminLogin/> } /> 
    <Route path="coordinator/about" element={ <About/> } />   
    <Route path="coordinator/home" element={ <Home/> } />  
    <Route path="coordinator/about/home" element={ <Home/> } /> 



    <Route path="admin" element={ <AdminLogin/> } /> 
    <Route path="admin/home" element={ <Home/> } /> 
    <Route path="admin/student" element={ <StudentLogin/> } /> 
    <Route path="admin/coordinator" element={ <CoordinatorLogin/> } /> 
    <Route path="admin/about" element={ <About/> } /> 
    <Route path="admin/about/home" element={ <Home/> } /> 

  
    <Route path="about/home" element={ <Home/> } />  */}
    
     
     


      </Routes>  
     
    </div>
  );
}

export default App;
