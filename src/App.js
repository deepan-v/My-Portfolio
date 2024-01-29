import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/Home/Home";
import AboutPage from "./Pages/About/About";
import Homefooter from "./Components/Home/Homefooter";
import ProjectPage from "./Pages/Projects/Project";
import ContactPage from "./Pages/Contact/Contact";
import { IoIosArrowRoundUp } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

function App() {

   let Deepan = useRef()

  let ToSetClass = useRef()
  let [Loading , SetLoading] = useState(false)


  let HandleScroll = ()=>{
   console.log('clicked');
      window.scrollTo({
                top: 0,
                behavior: 'smooth' 
            });
  }





   useEffect(()=>{
      
      window.addEventListener('scroll' , ()=>{
          let ScrollX = window.scrollY
          
      
       if(ScrollX > 300){
         ToSetClass.current.classList.add('AnimateShow')
       }
        else{
          ToSetClass.current.classList.remove('AnimateShow')
        }
      })

   },[])

   useEffect(()=>{
      setTimeout(()=>{SetLoading(!Loading)},3000)
   },[])



 
   if(!Loading){
        return(
         <div className="loader-container">
          <div className="loader"> </div>
          <div className="JustForStyle">Loading....</div>
        </div>
        )
  
   }

  return (
     <div style={{maxWidth:'100%' , marginBottom:'40px', position:'relative'}}>
         <div className='NavToCenter' style={{}}>
            <Navbar/>
         </div>
         <div ref={Deepan} >
            <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/About" element={<AboutPage/>}/>
            <Route path="/Project" element={<ProjectPage/>}/>
            <Route path="/Contact" element={<ContactPage/>}/>
         </Routes>
         {/* <div ref={Deepan} className={`${'FooterTo'} ${ToAnimate? 'FooterToAnimate':''}`}> */}
             {/* <div> */}
                <Homefooter />
             {/* </div> */}
         {/* </div> */}
         </div >
            <div onClick={HandleScroll} ref={ToSetClass}  className={'ForScrollUp'} > <IoIosArrowRoundUp/> </div>
     </div >
  );
}

export default App;
