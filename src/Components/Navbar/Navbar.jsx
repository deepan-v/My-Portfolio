import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import style from '../Navbar/Navbar.module.css'
import { RxTextAlignJustify } from "react-icons/rx";
import { HiOutlineX } from "react-icons/hi";
import { useLocation } from 'react-router-dom';


const Navbar = () => {
     let Location = useLocation() 
    let [Icon , SetIcon] = useState(true)
    let [Mode , SetMode ] = useState(true)
  return (
    <nav style={{position:'relative'}}>
        <h2 className={style.PortFolioBorder}> Portfolio</h2>  
        <div style={{display:'flex' ,gap:'50px', alignItems:'center'}}>
            <div  onClick={()=>SetIcon(!Icon)} className={style.ForIcons}>{
                Icon ? <RxTextAlignJustify fontSize={35}/> : <HiOutlineX fontSize={35}/>
            }</div>

            <div className={ Icon ?`${style.NavbarList} ${style.Slide}` :`${style.NavbarList}`}>
            <div className={Location.pathname == '/' ? `${style.Active}`:'' }>
                <HandleNavigate Name='Home' ToChange = {()=>SetIcon(!Icon)}  to='/'/>
            </div>
            <div  className={Location.pathname == '/About' ? `${style.Active}`:'' }>
                <HandleNavigate Name='About'  ToChange = {()=>SetIcon(!Icon)} to='/About' /> 
            </div>
            <div  className={Location.pathname == '/Project' ? `${style.Active}`:'' }>
                <HandleNavigate  to='/Project'  ToChange = {()=>SetIcon(!Icon)} Name='Projects' />
            </div>
            <div  className={Location.pathname == '/Contact' ? `${style.Active}`:'' }>
                <HandleNavigate  to='/Contact'  ToChange = {()=>SetIcon(!Icon)} Name='Contact' /> 
            </div>
        </div>
        </div>
    </nav>
  )
}


 export let HandleNavigate = ({to , Name ,ToChange})=>{

      let Location = useLocation() 


    return(
        <Link onClick={ToChange} className={ Location.pathname  === to ? `${style.Link} ${style.ForNavigate}`:`${style.Link}` } to={to} >{Name}</Link>
    )
}

export default Navbar