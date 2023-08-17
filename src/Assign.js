import React from 'react';

function Work(props) {
    return (
       <>
<div style={{border: "1px solid",width: "300px",height: "500px",alignItems:"center",backgroundColor: "#FFA500", ...props.style, }}>
       <h2 style={{padding: "20px",fontFamily: "big shoulder display cursive",fontSize: "40px",color: "#fff",textTransform: "uppercase",textAlign: "center"}}>{props.Heading}</h2>
       <p style={{justifyContent: "space between",color: "#fff",lineHeight: "2.5",textAlign: "center",marginBottom: "20px"}}>{props.Content}</p>
    <a href="#hello" style={{textDecoration: "none",width: "90px",marginBottom: "100px", marginLeft: "25%",marginTop: "60px",display: "inline-block",color: "#FFA500",border: "2px solid",borderRadius: "25px",padding: "12px 27px",backgroundColor: "#fff", ...props.btnStyle, }}>{props.Button}</a>
       </div>
       </>
   )
}

export default Work;
