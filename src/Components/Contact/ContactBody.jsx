import React from 'react'
import { ContactData } from '../../Data/Contact'
import style from '../Contact/Contact.module.css'

const ContactBody = () => {
  return (
    <div className={style.BodyContainer}>
      {ContactData.map((datas)=>{
        let {icon ,id , Item , Source ,status} = datas
        return(
           <div className={style.ContactBodyContainer} key={id}>
                <div className={style.IconsMove} style={{ fontSize: '30px', color: '#1da1f2', filter: 'drop-shadow(5px 5px 15px gray)' }}>{icon}</div>
               <h5 className={style.Item}>{Item}</h5>
               <a href={id == 4 ? Source :'#'}  target={status} className={style.Source}>{id == 4 ? 'https://www.linkedin.com' : Source } </a>
           </div>
        )
      })}
    </div>
  )
}

export default ContactBody