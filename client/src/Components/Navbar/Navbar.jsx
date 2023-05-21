import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/Gada_Electronic.png'
import './Navbar.css'
import { useAuth0 } from "@auth0/auth0-react";


export default function Navbar() {


    let open_menu = () => {

        let menu = document.getElementById("sidem");
        console.log(menu)
        menu.classList.add("side-menu-open")
    }

    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();


    let close_menu = () => {

        document.getElementById("sidem").classList.remove('side-menu-open')
    }



    return (
        <>
            <header className="header-section">
                <div className="menu-section">
                    <div className="container">
                        <div className="top-header">
                            <div className="header-logo">
                                <img src={Logo} alt="logo" />
                            </div>
                            <nav className="navbar d-lg-block d-none">
                                <ul className="nav-list">
                                    <li className="list-items">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="list-items">
                                        <Link to="/products/electronics">Electronics</Link>
                                    </li>
                                    <li className="list-items">
                                        <Link to="/about-us">About us</Link>
                                    </li>
                                    <li className="list-items">
                                        <Link to="/contact-us">Contact us</Link>
                                    </li>
                                    <li className="list-items">
                                        <Link to="/">Clothing</Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className="header-icons">
                                {isAuthenticated ? (
                                    <div className="header-icons">
                                        <div className="h-icons">
                                            <Link to="/user">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z">
                                                    </path>
                                                </svg>
                                            </Link>
                                        </div>
                                        <div className="h-icons">
                                            <Link to="/cart"> <svg id="bag" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z">
                                                </path>
                                            </svg></Link>
                                        </div>
                                        <div className="h-icons ">
                                            <Link to="/wish-list"> <svg id="like" stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z">
                                                </path>
                                            </svg></Link>
                                        </div>
                                        <button className='login-btn d-lg-block d-none' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                            Log Out
                                        </button>
                                    </div>
                                ) : (

                                    <button className='login-btn' onClick={() => loginWithRedirect()}>Log In</button>
                                )
                                }

                                <button className=" d-lg-none d-inline-block" id="menu-btn" onClick={open_menu}>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                        height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="side-menu " id="sidem">
                <div className="container">
                    <div className="side-menu-head">

                        <img src={Logo} alt="logo" />
                        <button id="close-btn" onClick={close_menu}>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <ul className="side-menu-list">
                        <li className="side-menu-list-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="side-menu-list-item">
                            <Link to="/products">Products</Link>
                        </li>
                        <li className="side-menu-list-item">
                            <Link to="/about-us">About us</Link>
                        </li>
                        <li className="side-menu-list-item">
                            <Link to="/contact-us">Contact us</Link>
                        </li>
                        <li className="side-menu-list-item">
                            <Link to="/">Clothing</Link>
                        </li>
                        {
                            isAuthenticated ?(

                        <li className="side-menu-list-item">
                            <button className='login-btn ' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                Log Out
                            </button>
                        </li>
                            ):(
                                <li></li>
                            )
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}
