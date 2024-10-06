import Sidebar from './Components/Sidebar';
import Signup from './Pages/Signup';
import './style.css/pages_common.css';
import { Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar  from './Components/navbar';
import Teachers from './Pages/Teachers';
import { useEffect, useState  } from 'react';


import Student from './Pages/Student';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';


import 'rsuite/dist/rsuite.min.css';
import axios from 'axios';
import Loading from './Components/Loading';
import { Loader } from 'rsuite';
import { ProfileProvider } from './context/profilecontext';
import  PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Courses from './Pages/Courses';
import Video from './Pages/Video';

function App() {
let [userinfo, setUserInfo] = useState();
let [login, setLogin] = useState(false);
let location = useNavigate();

 useEffect(()=>{
  
  let item = document.getElementsByClassName("item");
 Array.from(item).forEach(Element =>{
    Element.addEventListener("mouseover", function(e){
       let id = e.target.getAttribute("item_id");
       document.getElementById(id).style.display = "block";
       Element.style.backgroundColor = "rgba(45, 136, 212, 1)";
    })
    Element.addEventListener("mouseleave", function(e){
        let id = e.target.getAttribute("item_id");
        document.getElementById(id).style.display = "none";
        Element.style.backgroundColor = "rgba(21, 34, 89, 1)";
     })
 })
 let userid = JSON.parse(localStorage.getItem('token'));
 if(userid){
   let email = userid[0].email;
  

   let result = axios.post('http://localhost:5000/role', {email: email}).then(function(result){
      setUserInfo(result.data[0]);
      console.log(userinfo)
      
   })
  
  
 }
  


 
 

 },[])
 function next(e){
      
   let form = document.querySelector(".form-item");
   let email = form.email.value;
   let password = form.password.value;
   let data = {
       email: email,
       password: password
   }

   let result = axios.post("http://localhost:5000/Signin",  data).then(function (result){
       localStorage.setItem("token", JSON.stringify([{token:result.data.token, email: result.data.email} ]));
       alert(result.data.success);
       let userid = JSON.parse(localStorage.getItem("token"));

       axios.get('http://localhost:5000/token', {token:  userid[0].token});
       if(result.data.success == "signin Success"){
          
        
            setLogin(true);
            console.log(login);

      
          location('/');
         

         
       }
       
       

       
   }).catch((err)=>{
       console.log(err.Message);
   })
 
  
}
 
useEffect(()=>{
   let userid = localStorage.getItem('token');
   if(userid){
      setLogin(true);
   }
   else{
      setLogin(false);
   }

}, [login])
  
  return (

    <>
    
    <Sidebar/>
    <Navbar login={login}/>
    <Loading/>
    <ProfileProvider>
    <Routes>
    <Route element = {<PrivateRoute/>}>

    <Route path='/Teachers' element={<Teachers role={userinfo?userinfo.role:''}/>}></Route>
    <Route path='/Student' element={<Student  role={userinfo?userinfo.role:''}/>}></Route>
   <Route path='/Dashboard' element={<Dashboard/>}></Route>
   <Route path='/Courses' element={<Courses role={userinfo?userinfo.role:''}/>}></Route>
   <Route path='/Video' element={<Video role={userinfo?userinfo.role:''}/>}></Route>
   

  


    </Route>
     <Route element = {<PublicRoute/>}>
     <Route path='/' element={<Home/>}></Route>
     
     <Route path='/Login' element={<Login  next = {next}/>}></Route>
     <Route path='/Signup' element={<Signup/>}></Route>

     </Route>
     
    
      
      
   </Routes>
     

    </ProfileProvider>
     
    </>
  
  )
}

export default App
