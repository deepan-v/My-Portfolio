import React, { useEffect, useRef, useState } from 'react';
import Deepan from '../../Assests/my.jpg';
import { EducationData } from '../../Data/AllData';
import style from '../About/About.module.css';

const AboutBody = () => {
  const [ToAnimate, setToAnimate] = useState(false);

  const GrabValueFronmEdu = useRef(null)

  useEffect(() => {
    const Eduobserver = new IntersectionObserver((entries) => {
      const elements = entries[0].isIntersecting;
      setToAnimate(elements);
      // console.log(elements);
      // console.log(entries[0]);
    });

    Eduobserver.observe(GrabValueFronmEdu.current);

    // Cleanup the observer when the component unmounts
    return () => {
      Eduobserver.disconnect();
    };
  },[]);

  return (
    <div className={style.EducationContainer}>
      <img className={style.DeepanImg} src={Deepan} alt='My Image' />

      <div
        ref={GrabValueFronmEdu}
        className={`${style.Align} ${ToAnimate ? style.EducationAnimation : ''}`}
      >
        {EducationData.map((datas) => {
          const { id, Img, FieldOfStudy, Instiuite } = datas;
          return (
            <div className={style.Education} key={id}>
              <div className={style.EduTop}>
                <div> {Img} </div>
                <p className={style.FieldStudy}>{FieldOfStudy} </p>
              </div>
              <div className={style.instiute}>
                <p className={style.instiute}>{Instiuite}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutBody;
