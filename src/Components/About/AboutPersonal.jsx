import React, { useEffect, useRef, useState } from 'react'
import { personalData } from '../../Data/AllData'
import style from '../About/About.module.css'
import { Certification } from '../../Data/CertificateData'
import MyResume from '../../Assests/Myresume/Deepan Chakravarthi Resume.pdf'

const AboutPersonal = () => {

    let [ToAnimate , SetToAnimate] = useState()
    let GrabSkills = useRef(null)

    useEffect(()=>{
      let Observer  = new IntersectionObserver((entries)=>{
        let Elements = entries[0].isIntersecting
        SetToAnimate(Elements)
        // console.log(Elements);
      }) 
      Observer.observe(GrabSkills.current)
    },[])

    let ResumeLink = 'https://drive.google.com/file/d/1NcCE2s6rFijZFP_7tZMnU0ZKLzoecez6/view'

  return (
    <div ref={GrabSkills} className={`${style.PersonalDataContainer} ${ToAnimate ? style.LinkAnimateCss:''}`}>
        <div style={{display:'flex' , marginTop:'20px', gap:'20px' , flexWrap:'wrap', justifyContent:'center'}}>
            {Certification.map((datas)=>{
                let {id , Logo , CertificateName , Link ,Path} = datas
                return (
                   <div key={id}>
                       <a target='blank' className={style.Certificate} href={Path}>
                        <div style={{marginTop:'7px' ,fontSize:'20px', color:'black'}}>{Logo} </div>
                        <div style={{color:'black', fontSize:'14px'}}>{CertificateName} Certificate </div>
                        <div style={{fontSize:'20px' , marginTop:'9px'}}>{Link}</div>
                    </a>
                   </div>
                )
            })}
        </div>
        <a style={{width:'150px', textAlign:'center'}}  className={style.Resume}  href={MyResume} download="YourResume.pdf"   >Download CV</a>
    </div>
  )
}

export default AboutPersonal