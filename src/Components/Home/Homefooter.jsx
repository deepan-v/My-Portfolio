import React, { useState } from 'react'
import { Icons } from '../../Data/AllData'
import style from '../Home/Home.module.css'

const Homefooter = () => {
    let [Icon , SetIcon] = useState(Icons)
    let date = new Date()
    let Fullyear = date.getFullYear()
    
  return (
   
    <div  style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'30px'}}>
        <hr style={{width:'80%'}}/>
         <div className={style.ForMediaQury} >
       {Icon.map((icon)=>{
        let {id , img ,Link ,name} = icon
        return(
            <div key={id} className={style.ToAlignfoot}>
              <div className={style.FooterLink}>
              <a target='blank' style={{marginTop:'6px'}} href={Link}> 
                <img className={style.ForimgMedia} width={30}  src={img}/>
            </a>
            </div>
            <h5 > {name}</h5>
            </div>
        )
       })}
    </div>
    <p className={style.Copyright}>Made Wtih<span style={{color:'red'}}> &#10084; </span> by Deepan </p>
    </div>
  )
}

export default Homefooter