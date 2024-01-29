import { FaPhoneVolume } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";



export let ContactData = [
    {
        id:1,
        icon:<FaPhoneVolume/>,
        Item:'Call Me',
        Source:'+91-9150637272'
    },
    {
        id:2,
        icon:<FaLocationDot/>,
        Item:'Address',
        Source:'Muthamizh Nagar , Kodungaiyur ,Chennai'
    },
    {
        id:3,
        icon:<SiGmail/>,
        Item:'G-Mail',
        Source:'deepankrishnann@gamil.com'
    },
    {
        id:4,
        icon:<FaLinkedin/>,
        Item:'LinkedIn',
        Source:'https://www.linkedin.com/in/deepan-chakravarthi-75b022264/',
        status:'blank'
    },
]