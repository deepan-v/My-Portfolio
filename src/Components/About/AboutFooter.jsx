import React, { useEffect, useRef, useState } from 'react'
import { Skills } from '../../Data/ProgrammingIcons'
import style from '../About/About.module.css'
import '../About/AboutAnimation.css'

const AboutFooter = () => {
    let [Skill , SetSkill ] = useState(Skills)
    

  return (
    <div  className={style.SkillsContainer} >
       {Skill.map((skills)=>{
        let {id , Language , icons ,Percentage} = skills
        return(
            <section  className={style.Skillsection} key={id}>
               <div className={style.skillForAlign}>
                 <img className={style.OurIcons}  src={icons} alt={Language}/>
                 <h3 className={style.IconText}>{Language}</h3>
               </div>

               <div className={style.percentage}>
                 <div style={{width:Percentage , backgroundColor:'#1da1f2' , borderRadius:'7px', height:'100%'}}></div>
               </div>
            </section>
        )
       })}
    </div>
  )
}

export default AboutFooter