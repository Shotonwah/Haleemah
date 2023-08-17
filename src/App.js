// import logo from './logo.svg';
import './App.css';
import React from 'react';
import About from './UseState';
import Work from './Assign';
import Images, {No} from './Notify';
import './Notification.css';
import user from './user.jpg';
import Remote,{Make} from './Work';
import './Work.css';
import colors from "./colors.jpg"
function App() {
 return (
    <div className="App">
      <About />
      <div className='Work' style={{display: "flex",justifyContent: "center", minHeight: "100vh",alignItems: "center",borderRadius: "20px",gridTemplateColumns: "1gr 1gr",fontSize: "15px"}}>
        <Work Heading="SEDANS" Content="
        Choose a sedan for its
        affordability and excellents
        fuel economy.Ideal for
          cruising in the city or an
          your next road trip."  Button="Learn More" />
        <Work style={{backgroundColor: "#008b8b"}} btnStyle={{color: "#008b8b"}} Heading="SUVS" Content="
        Take an SUV for its spacious
        interior,power and
        versatility,perfect for your
        next family vacation and
        off-road adventures." Button="Learn More" />
        <Work style={{backgroundColor: "#013220"}} btnStyle={{color: "#013220"}} Heading="LUXURY" Content="
        Cruise in the best car brands
        without the bloated prices.
        Enjoy the enhanced comfort
        of a luxury rental and arrive
        in a style."  Button="Learn More" />
      </div>
      <div style={{background: "#fff",borderRadius: "20px",marginLeft: "35%",width: "900px",margin: "40px auto 0",border: "2px solid rgba(255,255,255,.2)", backdropFilter: "blur(20px)",boxShadow: "0 0 5px rgba(0, 0, 0,.2)"}}>
      <div className='wrapper'>
        <h2 className='note'>Notification <span className='letter'>3</span></h2>
        <p className='mark'>Mark all as read</p>
        </div>
    <Images user={user} name="Mark webber"  content="Mark webber reacted to your recent My first tournament today!"
      Minute="1m ago" />
    <Images user={user} content=" Angela grey followed you" Minute="5m ago" />
    <Images user={user} content=" Jacob Thompson has joined your group" content2="Chess Club"  Minute="1day ago" />
    <No user={user}inline="Risky Hassanuddin sent you a private message" days="5days ago" />
    <div className="line">
      <p>Hello,thanks for setting up the chess club.I've been a member for a 
      few weeks now and I'm already having lots of fun and improving my game.
      </p>
    </div>
    <No user={user} inline="Kimberly Smith commented on your picture" days="1week ago" />
    <No user={user} inline="Nathan Peterson reacted to your recent post 5 end-game strategies to
    increase your win rate" days="2week ago" />
    <No user={user} inline="Anna Kim Left the group Chess Club" days="2week ago" inline2="Chess club" />
     </div>

     <div>
      <Remote />
      <Make colors={colors} />
     </div>

      </div>
   )
 }

export default App;
