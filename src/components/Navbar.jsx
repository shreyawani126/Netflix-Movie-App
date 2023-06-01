 import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import "./navbar.scss"
import { useState } from "react"
 
 const Navbar = () => {
  const[isScroll,setIsScroll]=useState(false);
  window.onscroll =()=>{
    setIsScroll(window.pageYOffset == 0 ? false:true);
    return () => (window.onscroll=null);
  };
  console.log((isScroll))
   return (
     <div className={isScroll ? "navbar scroll" : "navbar"}>
       <div className='container'>
        <div className='left'>
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9SbjZeQ-brKJNc4CZPHSapNUtCi5Mumpup-Eb3CBG&s"
            alt=""
            />
         <span>Homepage</span>
        <span>Series</span>
        <span>Movies</span>
        <span>New and Popular</span>
        <span>My List</span>
        </div>
       
        <div className='right'>
        <Search className="icon"/>
        <span>KID</span>
        <Notifications className="icon"/>
        <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg" alt=""/>
        <div className="profile">
        <ArrowDropDown className="icon"/>
        <div className="options">
            <span>Settings</span>
            <span>Logout</span>
        </div>
        </div>
        
        </div>

       </div>
     </div>
   )
 }
 
 export default Navbar
 