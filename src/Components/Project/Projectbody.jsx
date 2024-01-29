import React from 'react'
import style from '../Project/Project.module.css'

const Projectbody = ({id , img ,ProjectLink , AboutProject , Language ,BgColor}) => {

  return (
    <div className={style.Projects} key={id}>
        <a target='blank' className={style.imgcontainer} href={ProjectLink}>
           <img className={style.ProjectImg}   src={img} alt="" />
        </a>
        <div className={style.AbtProject}>{AboutProject}</div>
        <div className={style.IndexZ}>{Language.map((Lan)=>{
          return(
            <span key={Lan} className={style.LanDesign}>{Lan} </span>
          )
        })} 
        </div>
    </div>
  )
}

export default Projectbody