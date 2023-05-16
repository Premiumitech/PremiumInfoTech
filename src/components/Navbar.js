import"./navbarStyle.css";
import logo from "./img/logo.png"
import React, { useState, useEffect } from 'react';
import list from './list.svg';
import crossClose from './cross.svg';


export const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
     // When the user scrolls the page, execute myFunction
     window.onscroll = function() {headerScroll()};

     // Get the header
     var header = document.getElementById("home");

     // Get the offset position of the navbar
     var sticky = header.offsetTop;

     // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
     function headerScroll() {
       if (window.pageYOffset > sticky) {
         header.classList.add("active-header");
       } else {
         header.classList.remove("active-header");
       }
     }
  }, []); 

  const handleToggle = () => {
  setToggle(!toggle);
}

  return (

    <section className="body-background" img src="thumbnail/Full_image.png" alt="thumbnail-background">
        <header id="home">
          <img className="logo" src={logo} alt="" />
          <nav className={toggle?'nav-bar expanded':'nav-bar close'}> 
              <ul>
                <li><a href="#home">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#service">SERVICE</a></li>
                <li><a href="#feature">FEATURES</a></li>
                <li><a href="#contact">CONTACT</a></li>
              </ul>
          </nav>

        <div className="toggle-icon menu" onClick={handleToggle}>
            {toggle? <img className="menu-hamburger" src={crossClose}/>: <img className="menu-hamburger" src={list}/>}
        </div>
        </header>

        <div className="content-info-grid">
          <div className="content-info">
            <h1 className="PIT-tittle">PREMIUM INFO TECH<br /><span>Software Engineering</span></h1>
            <p className="PIT-info">“We always seeking for newest and freshness way to bring awesomeness into everthing we do”
            </p>
          </div>
        </div> 
  </section>
  );
 
}

export default NavBar;
