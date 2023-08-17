import React from 'react';
import "./Notification.css";
import "./user.jpg";

function Images(props) {
    return (
        <>
        <div className='content'>
            <div className='display'>
            <img className="image" src={props.user} alt="...." />
           <p className="open">{props.content}<span className='content2'>{props.content2}</span></p>
           </div>
            <p className="display2">{props.Minute}</p>
        </div>
        </>
    )
}


 export function No(props){
    return(
        <>
            <div className="inline">
                <div className="no">
            <img className="img" src={props.user} alt="...." />
           <p>{props.inline}<span className='content3'>{props.inline2}</span></p>
           </div>
           <p className="no2">{props.days}</p>
           </div>
        </>
    )
 }
export default Images;
