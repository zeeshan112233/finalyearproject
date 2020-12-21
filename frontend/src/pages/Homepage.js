import React, { Component } from "react";
import { NavLink, Link, Redirect } from "react-router-dom";
import Xlider from "./Xlider";
import { BoxLoading } from "react-loadingg";

class Homepage extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="container">
            <nav className="navbar navbar-inverse" role="navigation">
              <div className="navbar-header">
                <button
                  type="button"
                  id="nav-toggle"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#main-nav"
                >
                  {" "}
                  <span className="sr-only">Toggle navigation</span>{" "}
                  <span className="icon-bar"></span> <span className="icon-bar"></span>{" "}
                  <span className="icon-bar"></span>{" "}
                </button>
                <a
                  href="#"
                  className="navbar-brand scroll-top logo  animated bounceInLeft"
                >
                  <b>
                    <i>{/* {Agile} */} IMPORTEXT</i>
                  </b>
                </a>{" "}
              </div>
              {/* <!--/.navbar-header--> */}
              <div id="main-nav" className="collapse navbar-collapse">
                <ul className="nav navbar-nav" id="mainNav">
                  <li className="active" id="firstLink">
                    <a href="#home" className="scroll-link">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="scroll-link">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#aboutUs" className="scroll-link">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#work" className="scroll-link">
                      Events
                    </a>
                  </li>
                  {/* <li>
                    <a href='#plans' className='scroll-link'>
                      Plans
                    </a>
                  </li> */}
                  <li>
                    <a href="#team" className="scroll-link">
                      Team
                    </a>
                  </li>
                  <li>
                    {/* <Link to='/signup' className='scroll-link'>
                      Contact Us
                    </Link> */}
                    <a href="#contactUs" className="scroll-link">
                      Contact Us
                    </a>
                    {/* <a href='/signup' className='scroll-link'>
                      Contact Us
                    </a> */}
                  </li>
                  <li>
                    <Link to="/signup" className="scroll-link">
                      LOGIN / SIGN UP !
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <!--/.navbar-collapse-->  */}
            </nav>
            {/* <!--/.navbar-->  */}
          </div>
          {/* <!--/.container-->  */}
        </header>
        {/* <!--/.header--> */}
        <div id="#top"></div>
        <section id="home">
          <div className="banner-container">
            {/* <!-- Slider -->  */}
            <Xlider style={{ position: "absolute", height: "238px" }}></Xlider>
            {/* <!-- end slider --> */}
          </div>
          <div className="container hero-text2">
            <h2>

              •	The system will save time for both organizers and audience by providing effective interaction.\n
              •	The audience will have an option to see already answered questions so in case they have the same question they can get the answer and thus save their time. \n
              •	For people among the audience who miss the streaming session. \n
              • The system will maintain the record of Frequently Asked Questions so that in case they miss the session due to some emergency they can see the Frequently Asked Questions.

            </h2>
          </div>
        </section>
        <section id="services" className="page-section colord">
          <div className="container">
            <div className="row">
              {/* <!-- item --> */}
              <div className="col-md-3 text-center">
                <div className="b1">
                  {" "}
                  <i className="circle">
                    <img src="assets/images/stream.png" alt="" />
                  </i>
                  <h3>LIVE STREAMING</h3>
                  <p>
                    You can stream on our platform. Just go live and deliver
                    your message to the audience. A great platform for people
                    with audience.
                  </p>
                </div>
              </div>
              {/* <!-- end: --> 
      
      <!-- item --> */}
              <div className="col-md-3 text-center">
                <div className="b1">
                  <i className="circle">
                    <img src="assets/images/a2.jpg" alt="" />
                  </i>
                  <h3>OTHER PLATFORM </h3>
                  <p>
                    If you streaming on any other platform such as Facebook or
                    youtube. Just share a link with us and we are good to go.{" "}
                  </p>
                </div>
              </div>
              {/* <!-- end: --> 
      
      <!-- item --> */}
              <div className="col-md-3 text-center">
                <div className="b1">
                  <i className="circle">
                    {" "}
                    <img src="assets/images/a3.jpg" alt="" />
                  </i>
                  <h3>PROCESS QUERIES</h3>
                  <p>
                    Have alot of queries ? We will manage all the queries for
                    you and make sure you see only important ones.
                  </p>
                </div>
              </div>
              {/* <!-- end: --> 
      
      <!-- item --> */}
              <div className="col-md-3 text-center">
                <div className="b1">
                  <i className="circle">
                    {" "}
                    <img src="assets/images/Prioritize.png" alt="" />
                  </i>
                  <h3>RANK QUERIES</h3>
                  <p>
                    All your queries will be ranked according to their
                    importance. So you see what you should see !Irrelevent
                    queries will be ignored
                  </p>
                </div>
              </div>
              {/* <!-- end:-->  */}
            </div>
          </div>
          {/* <!--/.container-->  */}
        </section>
        <section id="aboutUs">
          <div className="container">
            <div className="heading text-center">
              {/* <!-- Heading --> */}
              <h2>About Importext</h2>
              <p>
                The purpose of this project is to minimize the communication gap
                between Speakers and Audience. Enhance the experience of using
                live streams.
              </p>
            </div>
            <div className="row feature design">
              <div className="area1 columns right">
                <h3>CLEAR AND EFFECTIVE COMMUNICATION !</h3>
                <p>
                  For the Speaker/ Organizer, ImporText will provide the basic
                  facility to start any stream or schedule live streaming for
                  later. The speaker will be able to manage and communicate with
                  his/her audience much better as he/she will only see the
                  queries that are important !
                </p>
                <p>
                  The viewers of the stream will also be facilitated. They will
                  have an option to see already answered questions. The system
                  will maintain the record of Frequently Asked Questions.
                </p>
                {/* <a href="#" className="btn">
                  Download Mobile App
                </a> */}
              </div>
              <div className="area2 columns feature-media left">
                {" "}
                <img src="assets/images/mine.png" alt="" width="70%" />{" "}
              </div>
            </div>
          </div>
        </section>
        <section id="clients">
          <div id="demo" className="clients">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="customNavigation">
                    {" "}
                    <a className="prev">
                      <i className="fa fa-chevron-circle-left"></i>
                    </a>{" "}
                    <a className="next">
                      <i className="fa fa-chevron-circle-right"></i>
                    </a>{" "}
                  </div>
                  <div id="owl-demo" className="owl-carousel">
                    <div className="item">
                      {" "}
                      <span className="helper">
                        {" "}
                        <img
                          src="assets/images/react.png"
                          alt="client"
                        />
                      </span>{" "}
                    </div>
                    <div className="item">
                      {" "}
                      <span className="helper">
                        {" "}
                        <img
                          src="assets/images/mongo db.png"
                          alt="client"
                        />
                      </span>{" "}
                    </div>
                    <div className="item">
                      {" "}
                      <span className="helper">
                        {" "}
                        <img
                          src="assets/images/node.png"
                          alt="client"
                        />
                      </span>{" "}
                    </div>
                    <div className="item">
                      {" "}
                      <span className="helper">
                        {" "}
                        <img
                          src="assets/images/socket io.png"
                          alt="client"
                        />
                      </span>{" "}
                    </div>
                    <div className="item">
                      {" "}
                      <span className="helper">
                        {" "}
                        <img
                          src="assets/images/pyton.png"
                          alt="client"
                        />
                      </span>{" "}
                    </div>
                    <div className="item">
                      {" "}
                      <span className="helper">
                        {" "}
                        <img
                          src="assets/images/clients/client-6.png"
                          alt="client"
                        />
                      </span>{" "}
                    </div>
                    <div className="item">
                      {" "}
                      <span className="helper">
                        {" "}
                        <img
                          src="assets/images/clients/client-7.png"
                          alt="client"
                        />
                      </span>{" "}
                    </div>
                    <div className="item">
                      {" "}
                      <span className="helper">
                        {" "}
                        <img
                          src="assets/images/clients/client-8.png"
                          alt="client"
                        />
                      </span>{" "}
                    </div>
                    <div className="item">
                      {" "}
                      <span className="helper">
                        {" "}
                        <img
                          src="assets/images/clients/client-9.png"
                          alt="client"
                        />
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="work" className="page-section page">
          <div className="container text-center">
            <div className="heading">
              <h2>STREAMS </h2>
              <p>
                Click on any of the Stream to go to dashboard{" "}
              </p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div id="portfolio">
                  {/* <ul className="filters list-inline">
                    <li>
                      {" "}
                      <a className="active" data-filter="*" href="#">
                        All
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a data-filter=".photography" href="#">
                        Ongoing
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a data-filter=".branding" href="#">
                        Shcheduled
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a data-filter=".web" href="#">
                        Recorded
                      </a>{" "}
                    </li>
                  </ul> */}
                  <ul
                    className="items list-unstyled clearfix animated fadeInRight showing"
                    data-animation="fadeInRight"
                    style={{ position: "relative", height: "438px" }}
                  >
                    <li
                      className="item branding"
                      style={{
                        position: "absolute",
                        left: "0px",
                        top: "0px",
                      }}
                    >
                      {" "}
                      <a href="http://localhost:3001/signup" className="fancybox">
                        {" "}
                        <img src="assets/images/work/1.jpg" alt="" />
                        <div className="overlay">
                          {" "}
                          <span>Click here</span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                    <li
                      className="item photography"
                      style={{
                        position: "absolute",
                        left: "292px",
                        top: "0px",
                      }}
                    >
                      {" "}
                      <a href="http://localhost:3001/signup" className="fancybox">
                        {" "}
                        <img src="assets/images/work/2.jpg" alt="" />
                        <div className="overlay">
                          {" "}
                          <span>Click Here</span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                    <li
                      className="item branding"
                      style={{
                        position: "absolute",
                        left: "585px",
                        top: "0px",
                      }}
                    >
                      {" "}
                      <a href="http://localhost:3001/signup" className="fancybox">
                        {" "}
                        <img src="assets/images/work/3.jpg" alt="" />
                        <div className="overlay">
                          {" "}
                          <span>Click here</span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                    <li
                      className="item photography"
                      style={{
                        position: "absolute",
                        left: "877px",
                        top: "0px",
                      }}
                    >
                      {" "}
                      <a href="http://localhost:3001/signup" className="fancybox">
                        {" "}
                        <img src="assets/images/work/4.jpg" alt="" />
                        <div className="overlay">
                          {" "}
                          <span>Click Here</span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                    <li
                      className="item photography"
                      style={{
                        position: "absolute",
                        left: "0px",
                        top: "219px",
                      }}
                    >
                      {" "}
                      <a href="http://localhost:3001/signup" className="fancybox">
                        {" "}
                        <img src="assets/images/work/5.jpg" alt="" />
                        <div className="overlay">
                          {" "}
                          <span>Click Here</span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                    <li
                      className="item web"
                      style={{
                        position: "absolute",
                        left: "292px",
                        top: "219px",
                      }}
                    >
                      {" "}
                      <a href="http://localhost:3001/signup" className="fancybox">
                        {" "}
                        <img src="assets/images/work/6.jpg" alt="" />
                        <div className="overlay">
                          {" "}
                          <span>Click Here</span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                    <li
                      className="item photography"
                      style={{
                        position: "absolute",
                        left: "585px",
                        top: "219px",
                      }}
                    >
                      {" "}
                      <a href="http://localhost:3001/signup" className="fancybox">
                        {" "}
                        <img src="assets/images/work/7.jpg" alt="" />
                        <div className="overlay">
                          {" "}
                          <span>Click here</span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                    <li
                      className="item web"
                      style={{
                        position: "absolute",
                        left: "877px",
                        top: "219px",
                      }}
                    >
                      {" "}
                      <a href="http://localhost:3001/signup" className="fancybox">
                        {" "}
                        <img src="assets/images/work/8.jpg" alt="" />
                        <div className="overlay">
                          {" "}
                          <span>Click Here</span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section id='plans' className='page-section'>
          <div className='container'>
            <div className='heading text-center'> */}
        {/* <!-- Heading --> */}
        {/* <h2>Our Plans</h2>
              <p>
                At lorem Ipsum available, but the majority have suffered
                alteration in some form by injected humour.
              </p>
            </div>
            <div className='row flat'>
              <div className='col-lg-3 col-md-3 col-xs-12'>
                <ul className='plan plan1'>
                  <li className='plan-name'>Basic </li>
                  <li className='plan-price'>
                    {" "}
                    <strong>$29</strong> / month{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>5GB</strong> Storage{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>1GB</strong> RAM{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>400GB</strong> Bandwidth{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>10</strong> Email Address{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>Forum</strong> Support{" "}
                  </li>
                  <li className='plan-action'>
                    {" "}
                    <a href='#' className='btn btn-danger btn-lg'>
                      Signup
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div className='col-lg-3 col-md-3 col-xs-12'>
                <ul className='plan plan2 featured'>
                  <li className='plan-name'>Standard </li>
                  <li className='plan-price'>
                    {" "}
                    <strong>$39</strong> / month{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>5GB</strong> Storage{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>1GB</strong> RAM{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>400GB</strong> Bandwidth{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>10</strong> Email Address{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>Forum</strong> Support{" "}
                  </li>
                  <li className='plan-action'>
                    {" "}
                    <a href='#' className='btn btn-danger btn-lg'>
                      Signup
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div className='col-lg-3 col-md-3 col-xs-12'>
                <ul className='plan plan3'>
                  <li className='plan-name'>Advanced </li>
                  <li className='plan-price'>
                    {" "}
                    <strong>$199</strong> / month{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>50GB</strong> Storage{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>8GB</strong> RAM{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>1024GB</strong> Bandwidth{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>Unlimited</strong> Email Address{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>Forum</strong> Support{" "}
                  </li>
                  <li className='plan-action'>
                    {" "}
                    <a href='#' className='btn btn-danger btn-lg'>
                      Signup
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div className='col-lg-3 col-md-3 col-xs-12'>
                <ul className='plan plan4'>
                  <li className='plan-name'>Mighty </li>
                  <li className='plan-price'>
                    {" "}
                    <strong>$999</strong> / month{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>50GB</strong> Storage{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>8GB</strong> RAM{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>1024GB</strong> Bandwidth{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>Unlimited</strong> Email Address{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>Forum</strong> Support{" "}
                  </li>
                  <li className='plan-action'>
                    {" "}
                    <a href='#' className='btn btn-danger btn-lg'>
                      Signup
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section> */}
        <section id="team" className="page-section">
          <div className="container">
            <div className="heading text-center">
              {/* <!-- Heading --> */}
              <h2>Our Team</h2>
              <p>We ar a team of 4 people working on this project. </p>
            </div>
            {/* <!-- Team Member's Details --> */}
            <div className="team-content">
              <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-6">
                  {/* <!-- Team Member --> */}
                  <div className="team-member pDark">
                    {/* <!-- Image Hover Block --> */}
                    <div className="member-img">
                      {/* <!-- Image  -->  */}
                      <img
                        className="img-responsive"
                        src="assets/images/umair.jpg"
                        alt=""
                      />{" "}
                    </div>
                    {/* <!-- Member Details --> */}
                    <h4>Umair Mukhtar</h4>
                    {/* <!-- Designation -->  */}
                    <span className="pos">SP17-BCS-046</span>
                    <div className="team-socials">
                      {" "}
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-dribbble"></i>
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-github"></i>
                      </a>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6">
                  {/* <!-- Team Member --> */}
                  <div className="team-member pDark">
                    {/* <!-- Image Hover Block --> */}
                    <div className="member-img">
                      {/* <!-- Image  -->  */}
                      <img
                        className="img-responsive"
                        src="assets/images/zeeshan.PNG"
                        alt=""
                      />{" "}
                    </div>
                    {/* <!-- Member Details --> */}
                    <h4>Zeeshan Yasin</h4>
                    {/* <!-- Designation -->  */}
                    <span className="pos">SP17-BCS-048</span>
                    <div className="team-socials">
                      {" "}
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-dribbble"></i>
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-github"></i>
                      </a>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6">
                  {/* <!-- Team Member --> */}
                  <div className="team-member pDark">
                    {/* <!-- Image Hover Block --> */}
                    <div className="member-img">
                      {/* <!-- Image  -->  */}
                      <img
                        className="img-responsive"
                        src="assets/images/sir1.jpg"
                        alt=""
                      />{" "}
                    </div>
                    {/* <!-- Member Details --> */}
                    <h4>Dr. Inayat-ur-Rehman</h4>
                    {/* <!-- Designation -->  */}
                    <span className="pos">Supervisor</span>
                    <div className="team-socials">
                      {" "}
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-dribbble"></i>
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-github"></i>
                      </a>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6">
                  {/* <!-- Team Member --> */}
                  <div className="team-member pDark">
                    {/* <!-- Image Hover Block --> */}
                    <div className="member-img">
                      {/* <!-- Image  -->  */}
                      <img
                        className="img-responsive"
                        src="assets/images/sir2.jpg"
                        alt=""
                      />{" "}
                    </div>
                    {/* <!-- Member Details --> */}
                    <h4>Dr. Saif-ur-Rehman Khan</h4>
                    {/* <!-- Designation -->  */}
                    <span className="pos">co. supervisor</span>
                    <div className="team-socials">
                      {" "}
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-dribbble"></i>
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-github"></i>
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--/.container-->  */}
        </section>
        <section id="contactUs" className="contact-parlex">
          <div className="parlex-back">
            <div className="container">
              <div className="row">
                <div className="heading text-center">
                  {/* <!-- Heading --> */}
                  <h2>Contact Us</h2>
                  <p>
                    If you have any queries or questions regarding any aspect of
                    the system, or if you have any suggestions that you think
                    will improve the systems, do let us know ! Your suggestions
                    are apprciated !{" "}
                  </p>
                </div>
              </div>
              <div className="row mrgn30">
                <form method="post" action="" id="contactfrm" role="form">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Enter name"
                        title="Please enter your name (at least 2 characters)"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Enter email"
                        title="Please enter a valid email address"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="comments">Comments</label>
                      <textarea
                        name="comment"
                        className="form-control"
                        id="comments"
                        cols="3"
                        rows="5"
                        placeholder="Enter your message…"
                        title="Please enter your message (at least 10 characters)"
                      ></textarea>
                      <button
                        name="submit"
                        type="submit"
                        className="btn btn-lg btn-primary"
                        id="submit"
                      >
                        Submit
                      </button>
                    </div>
                    <div className="result"></div>
                  </div>
                </form>
              </div>
            </div>
            {/* <!--/.container-->  */}
          </div>
        </section>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="col">
                  <h4>Contact us</h4>
                  <ul>
                    <li>Comsats Univesty Islmabad </li>
                    <li>Phone: +92 348 5055784 | +92 346 6510798 </li>
                    <li>
                      Email:{" "}
                      <a title="Email Us">
                        zeeshanyasin340@gmail.com || umairmukhtar332@gmail.com
                      </a>
                    </li>
                    <li>
                      Skype:{" "}
                      <a href="skype:my.test?call" title="Skype us">
                        importext
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <div className='col-md-3'>
                <div className='col'>
                  <h4>Mailing list</h4>
                  <p>
                    Lorem ipsum dolor sit amet, ea eum labitur scsstie
                    percipitoleat.
                  </p>
                  <form className='form-inline'>
                    <div className='input-group'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Your email address...'
                      />
                      <span className='input-group-btn'>
                        <button className='btn' type='button'>
                          Go!
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
 */}
              <div className="col-md-6">
                <div className="col col-social-icons">
                  <h4>Follow us</h4>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-google-plus"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-flickr"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-skype"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </div>
              </div>
              {/* 
              <div className='col-md-3'>
                <div className='col'>
                  <h4>Latest News</h4>
                  <p>
                    Lorem ipsum dolor labitur scsstie per sit amet, ea eum
                    labitur scsstie percipitoleat.
                    <br />
                    <a href='#' className='btn'>
                      Get Mores!
                    </a>
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </footer>
        {/* <!--/.page-section--> */}
        <section className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                {" "}
                Copyright 2020 | All Rights Reserved -- Importext{" "}
              </div>
            </div>
            {/* <!-- / .row -->  */}
          </div>
        </section>
        <a href="#top" className="topHome">
          <i className="fa fa-chevron-up fa-2x"></i>
        </a>
      </div>
    );
  }
}

export default Homepage;
