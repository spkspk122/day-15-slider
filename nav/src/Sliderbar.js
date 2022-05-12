import React from 'react'
import './nav.css'
import {   AiFillGoogleCircle } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiFacebookCircleLine } from "react-icons/ri";
import { BsDribbble } from "react-icons/bs";
import { HiHome} from "react-icons/hi";
import { FcAbout } from "react-icons/fc";
import {FcBusinessContact } from "react-icons/fc";
import { GrBlog } from "react-icons/gr";
 function Slidebar() {
  return (
    <div>
       { <nav class="navbar navbar-light bg-light fixed-top">
  <div class="container-fluid">
    <button class="navbar-toggler text-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title  text-primary" id="offcanvasNavbarLabel">Coding Addict</h5>
        <button type="button" class="btn-close  text-danger" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active text-primary" aria-current="page" href="#"><AiFillGoogleCircle size={'20'}/> you can search here</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active text-info" href="#"><GrPinterest size={'20'}/> visit our blog</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link active text-primary" href="#" >
            <AiOutlineTwitter size={'20'}/>checkOut
            </a>
            </li>
            <li class="nav-item ">
            <a class="nav-link active text-primary" href="#" >
            <RiFacebookCircleLine size={'20'}/>Contact us here 
            </a>
            </li>
            <li class="nav-item ">
            <a class="nav-link active text-warning" href="#" > 
            <BsDribbble size={'20'}/>Know More
            </a>
            </li>
            </ul>
            </div>
            <div class='d-flex'>
              <a class='nav-link' href='#'><HiHome size={'20'}/> Home</a>
              <a class='nav-link' href='#'><FcAbout size={'20'}/>About</a>
              <a class='nav-link  text-success' href='#'><FcBusinessContact size={'20'}/>Contact</a>
              <a class='nav-link' href='#'><GrBlog size={'20'}/>BLOG</a>

            </div>
            </div>
  </div>
  </nav> }
  
  <br/>
  <br/>
  
</div>
  )
}
export default Slidebar
