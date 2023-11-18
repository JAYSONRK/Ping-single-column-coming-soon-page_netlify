import  React from 'react';
import Form from './Form';
import Picture from './Picture';
import Icons from './Icons';

const Card = () => {
    return (<>
    <div className="card">
        <h2>PING.</h2>
        <h2><span>We are launching</span> soon!</h2>
        <p>  Subscribe and get notified</p>
        <Form/>
        <Picture/>
        <Icons/>
        <footer>
        <p>&copy; Copyright Ping. All rights reserved.</p>
        </footer>
    </div>
</>)
}

export default Card;