import React, { Component } from 'react'
import './nav.css'
import Logo from '../../assets/logo2.png'
import { NavLink } from 'react-router-dom'

let introduction = "INTRODUCTION"
let reviews = "REVIEWS"
let communicate = "COMMUNICATE"
let development = "DEVELOPMENT"

export const Nav = ()=> {
    const activeStyle = {
        color: '#aeb2fe',
        fontWeight: 'bold'
    };
    return (
        <nav id = "nav">
            <div className = "wrap">
                <div className = "logo">
                    <a href="/"><img className="logoImg" src={Logo}/></a>
                </div>
                <div className = "innerTap">
                    <span><a href="/#introduction">{introduction}</a></span>
                    <span><a href="/#reviews">{reviews}</a></span>
                    <span><NavLink to="/communicate" activeStyle={activeStyle}>{communicate}</NavLink></span>
                    <span><NavLink to="/development/1" activeStyle={activeStyle}>{development}</NavLink></span>
                </div>
            </div>
        </nav>
    )
}