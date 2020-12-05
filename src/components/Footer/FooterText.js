import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaTwitter,
} from 'react-icons/fa';
import './Footer.css';

// const iconStyle = {
//   color: '#ffffff',
//   fontSize: '2rem',
//   // verticalAlign: 'middle',
//   // padding: '1px',
//   // marginLeft: '0.4rem',
//   // marginRght: '0.25rem',
// };

export const Social_List = [
  {
    id: 1,
    link: 'https://www.instagram.com/o.c.u.l.u.s_s.p.i.t/',
    name: 'instagram',
    icon: <FaInstagram className='icon-style' />,
  },
  {
    id: 2,
    link: 'https://www.facebook.com/watch/OculusSeesAll/',
    name: 'facebook',
    icon: <FaFacebookF className='icon-style' />,
  },
  {
    id: 3,
    link: 'https://www.linkedin.com/company/oculusseesall/',
    name: 'linkedin',
    icon: <FaLinkedinIn className='icon-style' />,
  },
  {
    id: 4,
    link: 'https://www.youtube.com/channel/UCm5gXAKIwUQTuGngoGlM4pg',
    name: 'youtube',
    icon: <FaYoutube className='icon-style' />,
  },
  {
    id: 5,
    link: 'https://www.facebook.com/watch/OculusSeesAll/',
    name: 'whatsapp',
    icon: <FaWhatsapp className='icon-style' />,
  },
  {
    id: 6,
    link: 'https://twitter.com/OculusSeesAll',
    name: 'twitter',
    icon: <FaTwitter className='icon-style' />,
  },
];
