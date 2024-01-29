import React, { useEffect, useRef, useState } from 'react'
import style from '../Project/Project.module.css'
import Projectbody from './Projectbody'
import { ProjectData } from '../../Data/Project'

const Project = () => {

    const [ToAnimate, setToAnimate] = useState(false);

  const ForLinkTop = useRef(null)

  useEffect(() => {
    const LinkToGo = new IntersectionObserver((entries) => {
      const elements = entries[0].isIntersecting;
      setToAnimate(elements);
      // console.log(elements);
    });

    LinkToGo.observe(ForLinkTop.current);
   

    // Cleanup the observer when the component unmounts
    return () => {
      LinkToGo.disconnect();
    };
  }, []);


  return (
    <div className={`${style.LinkParaOpacity} ${ToAnimate ? style.LinkParaAnimate:''}`} ref={ForLinkTop}>
      <div className={`${style.projectimg} ${style.forimg}`}>My Personal Projects</div>
      <div className={style.ProjectContainer}>
          {ProjectData.map((states)=>{
            return(
             <div key={states.id}> <Projectbody {...states} /></div>
            )
          })}
      </div>
    </div>
  )
}

export default Project