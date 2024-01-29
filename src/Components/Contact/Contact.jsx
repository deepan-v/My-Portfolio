import React, { useEffect, useRef, useState } from 'react'
import ContactBody from './ContactBody'
import style from '../Contact/Contact.module.css'
import ContactUs from './ContactUs'

const Contact = () => {
     let [Contact , SetContact] = useState()
     let Contactgrab = useRef(null)

    useEffect(()=>{
      let Observer  = new IntersectionObserver((entries)=>{
        let Elements = entries[0].isIntersecting
        SetContact(Elements)

      }) 
      Observer.observe(Contactgrab.current)

    },[])

  return (
    <div ref={Contactgrab} className={`${style.ContactAnimate} ${ Contact ? style.ToAnimateItems:''}`} style={{width:'80%', margin:'0px auto'}}>
      <section style={{marginTop:'40px'}}>
       <header style={{position:'relative'}}>
          <h2 className={style.ContactHead}> Contact Me :</h2>
       </header>
         <ContactBody/>
         <main style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
           <ContactUs/>
         </main>
      </section>
    </div>
  )
}

export default Contact