import React, { useEffect, useRef, useState } from 'react'
import AboutHead from './AboutHead'
import AboutBody from './AboutBody'
import AboutFooter from './AboutFooter'
import AboutPersonal from './AboutPersonal'
import style from '../About/About.module.css'
import '../About/AboutAnimation.css'

const About = () => {
   let [ToAnimate , SetToAnimate] = useState()
   let [LinkAnimate , SetLinkAnimate ]= useState()
   let GrabValue = useRef(null)
   let LinkPara = useRef(null)

    useEffect(()=>{
      let Observer  = new IntersectionObserver((entries)=>{
        let Elements = entries[0].isIntersecting
        SetToAnimate(Elements)

      }) 
      Observer.observe(GrabValue.current)

    },[])

      useEffect(()=>{
      let ObserverToLink  = new IntersectionObserver((entries)=>{
        let ElementsLink = entries[0].isIntersecting
        SetLinkAnimate(ElementsLink)

      }) 
        ObserverToLink.observe(LinkPara.current)
    },[])

  return (
    <div className={style.ToTrouble} >
      <div className={style.TopAlign}>
          <p className={style.knowUnder} style={{ marginBottom:'50px', fontStyle:'normal'}}>Get To Know More About Me</p>
      </div>
       <AboutHead/>
       <section className={style.Under}>
        <h2 className={style.EduUnderScore} >EDUCATION :  </h2>
          <AboutBody/>
       </section>
       <section ref={GrabValue} className={`${style.SetAnimationToSkills} ${ToAnimate ? style.SkillAnimation:'' } `} style={{position:'relative' , marginTop:'50px',}}>
         <h2 className={style.skills}> Skills :</h2>
         <div style={{Width:'80%' , minHeight:'100px'}}>
           <AboutFooter/> 
         </div>
       </section>
       <section style={{ margin:'50px 0px', position:'relative',}}>
        <h2 className={style.Achievement}>Achievement:</h2>
        <p ref={LinkPara} className={`${style.ForAccomplisment } ${LinkAnimate ? style.ForTopParaLinkAnima:'' }` }> I have successfully completed front-end oriented courses at various renowned <b  style={{color:'#1da1f2'}}>institutions</b> and <b  style={{color:'#1da1f2'}}>industry-leading organizations.</b> </p>
         <AboutPersonal/>
       </section>
    </div>
  )
}

export default About