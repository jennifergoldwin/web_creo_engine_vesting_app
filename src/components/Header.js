import React from "react"
import Logo from "../assets/logo.png"
import "../App.css"

const Header=()=>{
    return(
        <header className=" custom-navbar">
            <nav className="container-fluid navbar  navbar-expand-lg " >
                <a className="navbar-brand" href="/#">
                    <div>
                        <img src={Logo} alt="Creo Engine" />
                    </div>
                </a>
                <button className=" custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navmenu">
                    <span className="custom-toggler navbar-toggler-icon "></span>
                </button>

                <div className="collapse navbar-collapse " id="navmenu" >
                    <ul className="navbar-nav ml-auto " id="top-menu">
                        <li className="nav-item">
                            <div>
                                <button className="btn-connect"><i className="fa-solid fa-wallet" ></i> <span >CONNECT WALLET</span></button>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header