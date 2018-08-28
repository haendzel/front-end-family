import React from 'react';

import './styles.pcss'

const NotFound404 = () =>

	<div className="fe-container">
	<div className="logo animated hinge">
    <div className="window felogo"><img src="src/assets/images/logo-small.svg"></img>
    </div>

    <div className="top-lang animated hinge">
    <div className="dropdown">
    <button className="dropbtn-lang">English</button>
    <div className="dropdown-content">
        <a href="#">Arabic</a>
        <a href="#">Hebrew</a>
        <a href="#">Swahili</a>
    </div>
    </div>
    </div>

	<div className="contact-bar animated hinge">
    <a href="#mailus"><img src="src/assets/images/post.png"/></a>
    </div>

    <div className="section animated tada" id="error404">
    <div className="window">
    <div className="window-header"><span>Error 404</span></div>
    <div className="window-inner">
    <h2>404</h2>
    <h1>Ooops... this page not found.</h1>
    <a href="index.html">Back to home</a>
    </div>
    </div>
    </div>
    </div>
    </div>

export default NotFound404;
