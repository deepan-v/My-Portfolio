import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import style from '../Contact/Contact.module.css'
import HandleValidate from './Validate';

 const ContactUs = () => {

   
   let [UsersData , SetUsersData] = useState({
    user_name:'',
    user_email:'',
    message:'',
   })
    

  const form = useRef();

  let [Boolean , SetBoolean] = useState(false)
  let [ToMount , SetToMount] = useState(false)
  let [Error , SetError] = useState({})

   let ErrorHandling = Object.keys(Error).length
  


  let HandleChange = (e)=>{
    SetUsersData({...UsersData , [e.target.name]:e.target.value})
  }
 
  let Deepan = ()=>{
      SetError(HandleValidate(UsersData))
  }


 
  const sendEmail = async (e) => {

    e.preventDefault();
     SetBoolean(true)

     if(ErrorHandling !== 0){
      SetBoolean(false)
       return
    }

    console.log('object');

    try {
        let HandleEmail = await emailjs.sendForm('service_cdrg1cj', 'template_tf6cnpt', form.current, 'qw3yoyD3f9qc8XRRZ')
         console.log(HandleEmail);
         SetToMount(true)
         setTimeout(()=>SetToMount(false),5000)
         SetUsersData({
           user_name:'',
           user_email:'',
           message:'',
          })
           SetBoolean(false)
         console.log('object');

        
    } catch (error) {
        console.log(error);
        SetBoolean(false)

    } 
  };

  return ( 
  
    <form className={style.Form} ref={form} onSubmit={sendEmail}>
      <div style={{position:'relative'}}>
         <h2 className={style.FormHeading} style={{textAlign:'center', marginBottom:'30px'}}>Drop Your Message Here !</h2>
      </div>


      <input placeholder='Name :' onChange={HandleChange} value={UsersData.user_name} style={{marginBottom:'3px' , }} type="text" name="user_name" />
      <p className={style.ErrorShow}>{Error.nameError}</p>

      <input placeholder='E-Mail' onChange={HandleChange} value={UsersData.user_email} style={{marginBottom:'3px'}}type="text" name="user_email" />
      <p className={style.ErrorShow}>{Error.emailError}</p>

      <textarea  placeholder='Message' onChange={HandleChange} value={UsersData.message} style={{marginBottom:'3px', borderRadius:'5px', height:'100px', padding:'5px'}} name="message" />
      <p className={style.ErrorShow}>{Error.message}</p>

      <button className={style.FormBtn} onClick={Deepan} disabled ={Boolean} type="submit"  > Send !</button>
      <div className={style.ToShowSent}>{ToMount&&<div>Message Received , I'll Get Back You Soon  &#128077;</div>}</div>
    </form>
  );
};

export default ContactUs


