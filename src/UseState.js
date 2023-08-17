import {useState} from 'react';

function About() {
    const [Name, setName] = useState("Haleemah");
    const [Age, setAge]  = useState("10");
    const [Month, setMonth] = useState("October");
    console.log({setName},{setAge},{setMonth});

    return(
        <>
        <p>My Name is {Name}</p>
        <p>I will be {Age} by {Month}</p>
        </>
    )
}

export default About;