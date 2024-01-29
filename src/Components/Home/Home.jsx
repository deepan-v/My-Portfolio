import React, { useEffect, useRef, useState } from 'react'
import HomeRight from './HomeRight'
import Style from '../Home/Home.module.css'
import { FiExternalLink } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Home = () => {


   const [ToAnimate, setToAnimate] = useState(false);

  const ForHome = useRef(null)

  useEffect(() => {
    const HomeAnimate = new IntersectionObserver((entries) => {
      const elements = entries[0].isIntersecting;
      setToAnimate(elements);
      // console.log(elements);
    });

    HomeAnimate.observe(ForHome.current);
   

    // Cleanup the observer when the component unmounts
    return () => {
      HomeAnimate.disconnect();
    };
  }, []);

  let ToMyResume = 'https://drive.google.com/file/d/1NcCE2s6rFijZFP_7tZMnU0ZKLzoecez6/view?google_abuse=GOOGLE_ABUSE_EXEMPTION%3DID%3Dde07cbbb8fec34c7:TM%3D1706422286:C%3Dr:IP%3D2401:4900:3603:a9bc:c55d:17e7:807c:5147-:S%3DTpJxojBsz1IgkqDlIB_Qv3o%3B+path%3D/%3B+domain%3Dgoogle.com%3B+expires%3DSun,+28-Jan-2024+09:11:26+GMT'
  return (
    <div ref={ForHome} className={`${Style.HomeScroll} ${ToAnimate ? Style.HomeScrollAnimate:'' }`} style={{display:'flex',flexDirection:'column', position:'relative'}}>
      <div className={Style.HomeContainer}>
        <div className={Style.HomeLeft}>
           <h3> Hey, I'm  <b style={{color:'#1da1f2'}}>Deepan,</b>  Front-End Developer   &#128075;</h3>
           <p style={{fontStyle:'normal', color:'rgb(91, 91, 91)'}}>
              My journey in the world of <b style={{color:'#1da1f2'}}>web development</b> is a story of continuous learning and innovation. 
              Explore my <b style={{color:'#1da1f2'}} >portfolio</b> to witness a collection of projects that showcase my dedication to crafting
              user-centric, engaging interfaces....
           </p>
           <div className={Style.HomeBtn}> 
              <Link className={Style.LinkAlign} to='/About' >
                 <a className={Style.Aboutme} to='/About'> About Me  </a>  
                 <div style={{marginTop:'5px'}} ><FaArrowRightLong  /></div>
                 
              </Link>
               <a href={ToMyResume} className={`${Style.LinkAlign} ${Style.ColorChange}`} >      
                   <a className={Style.MyResume} target='blank' href={ToMyResume}> My Resume </a>
                   <div className={Style.LinkIcons} ><FiExternalLink  /></div>
                 
               </a>
           </div>
        </div>
        <div>
          <HomeRight/>
         
        </div>
       
    </div>

    </div>
  )
}

export default Home