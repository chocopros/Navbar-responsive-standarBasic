import React from 'react'
import styled from 'styled-components'
import {FaBars, FaTimes} from "react-icons/fa"
import { useRef } from 'react'

const Navbar = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

  return (
    <NavBar>
        <h3>Logo</h3>
        <nav ref={navRef}>
            <a href="http://">Home</a>
            <a href="http://">My Work</a>
            <a href="http://">Blog</a>
            <a href="http://">About me</a>

            <button 
                onClick={showNavbar}
                className='nav-btn nav-close-btn'
            >
                <FaTimes />
            </button>

        </nav>
        <button 
            onClick={showNavbar}
            className='nav-btn nav-close-btn'
        >
            <FaBars />
        </button>
    </NavBar>
  )
}

export default Navbar

const NavBar = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    padding: 0 2rem;
    background-color: var(--mainColor);
    color: var(--textColor);

    nav a{
        margin: 0 2rem;
        color: var(--textColor);
        text-decoration: none;
    }

    nav a:hover{
        color: var(--secondaryColor)
    }

    .nav-btn{
        padding: 5px;
        cursor: pointer;
        background: transparent;
        border: none;
        outline: none;
        color: var(--textColor);
        visibility: hidden;
        opacity: 0;
        font-size: 1.8rem;
    }

    @media only screen and (max-width: 1024px){
        .nav-btn {
            visibility: visible;
            opacity: 1;
        }

        nav{
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            background-color: var(--mainColor);
            transition: 1s;
            transform: translateY(-100vh);
        }

        .responsive_nav{
            transform: none;

        }

        nav .nav-close-btn{
            position: absolute;
            top: 2rem;
            right: 2rem;
        }

        nav a {
            font-size: 3.5rem;
        }

    
    }

`