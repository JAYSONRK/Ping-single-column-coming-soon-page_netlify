import  React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';

const Icons = () => {
    return (<>
    <ul>
        <li><FontAwesomeIcon className="facebook" icon={faFacebookF} /></li>
        <li><TwitterIcon className="twitter"/></li>
        <li><InstagramIcon className="instagram"/></li>
    </ul>
</>)
}

export default Icons;