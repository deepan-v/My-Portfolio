import React from 'react'
import style from '../About/About.module.css'

const AboutHead = () => {
  return (
    <div >
       <div className={style.AboutHeader}>
         <h2 className={style.AboutMe}>About Me :</h2>
         <span></span>
       </div>
        <div className={style.HeaderContent}>
            <h2>Hey Man , <b style={{color:'#1da1f2'}}>I'm a Front-End Developer</b> &#128075; </h2>
            <p className={style.HeadPara}>As a Front-End developer Fresher with 10 months of practical experience,
               I specialize in creating responsive and visually appealing websites using
               <b style={{color:'#1da1f2'}}> HTML, CSS, Bootstrap, JavaScript, and React JS.</b> I am a proficient React.js
                 Developer with a robust educational background in front-end development,
                holding a front-end development certification. Fluent in both <b style={{color:'#1da1f2'}}>Tamil and English</b> , 
                I bring a versatile skill set to the table.</p>
        </div>
    </div>
  )
}

export default AboutHead