import React from "react";
import "./navbar.css";

const navbar = () => {
    return (
        <div data-testid="navbar" className="container-fluid position-relative nav-bar p-0">

            <div className="container-lg position-relative p-0 px-lg-3">
                <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0">
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto py-0">
                            <a href="/home" className="nav-item nav-link active">
                                Home
                            </a>
                            <a href="/home" className="nav-item nav-link">
                                Properties
                            </a>
                            {/* <a href="/GSitems" className="nav-item nav-link">
                                Store
                            </a> */}
                        </div>
                        <a
                            href="/home"
                            className="navbar-brand mx-5 d-none d-lg-block"
                        >
                            {/* <h1 className="m-0 display-4 text-primary">FOODIE</h1> */}
                            <h1 className="m-0 display-4 text-primary">
                                <span class="text-secondary">P</span>
                                roperty
                                <span className="text-secondary"> C</span>
                                hain
                            </h1>
                        </a>
                        <div className="navbar-nav mr-auto py-0">
                            <a href="/Contact" className="nav-item nav-link">
                                Contact
                            </a>
                            <a href="/Cart" className="nav-item nav-link">
                                Purchase
                            </a>
                            <a href="https://www.google.com/maps/place/FAST+National+University+of+Computer+and+Emerging+Sciences,+Islamabad+Campus/@33.6565377,73.0131881,17z/data=!3m1!4b1!4m5!3m4!1s0x38dfbe1faaaaaaab:0x223386a2985e88f4!8m2!3d33.6565377!4d73.0153768" className="nav-item nav-link">
                                Track
                            </a>
                        </div>
                    </div>
                </nav>
            </div>

        </div>
    );
};

export default navbar;
