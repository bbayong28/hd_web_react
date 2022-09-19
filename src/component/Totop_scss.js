import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
//gsap...javascript animation, styled-component...

const Btn = styled.div`
    position:fixed;    
    bottom:100px;
    right:100px;
    color:#fff;
    background:#008850;
    font-size:30px;
    padding:10px;
    border-radius: 50%;
    visibility: hidden;
    opacity: 0;
    cursor: pointer;
    transition: 0.5s;
    &:hover{
        color: #f00;
    }
    &.on{ 
        visibility: visible;
        opacity: 1;
        background: #ff0;
    }
    `

const Totop = () => {
    const [scrollY, setScollY] = useState(0);
    const totopHandler = () => {
        gsap.to(window, { duration: 0.5, scrollTo: 0 });
    }

    const scrollEvent = () => {
        let scy = window.scrollY;
        setScollY(scy)
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin);
    },[])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            let scy = window.scrollY;
            setScollY(scy)
        });
        return () => {

        }
    },[])
    return (         
        <Btn onClick={totopHandler} on={scrollY > 400 ? scrollY : null}>
            <i className='xi-arrow-top'></i>
        </Btn>
    )
}


export default Totop;