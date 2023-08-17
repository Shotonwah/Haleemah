import React from 'react';
import "./Work.css";
import "./colors.jpg";

function Remote() {
    return(
        <>
        <div className="thebody">
        <div className="contain">
            <nav className="container">
           <h1 className="snap">Snap</h1>
           <a href="#h">Features</a>
           <a href="#h">Company</a>
           <a href="#h">Careers</a>
           <a href="#h">About</a>
            </nav>
            <div className="login">
            <nav>
            <a href="#t">Login<span className="register">Register</span></a>
            </nav>
            </div>
            <div className="make">
            <h2>Make <br/>
            Remote Work
            </h2>
            </div>
            <p>Get your team in sync,no matter your location.<br/>
            Streamline Processes, create team rituals,and <br/>
            watch productivity soar. <br/>
            </p><br/>
            <a href="#v" className="button">Learn more</a>
            <footer className="footer">
                <p>databiz audiophile meet maker</p>
            </footer>
        </div>
        </div>
        </>
     )
     }
    export function  Make(props) {
    return(
        <>
        <div className="theimage">
             <img className="colors" src={props.colors}  alt="///" />
            </div>
        </>
    )
}
export default Remote;