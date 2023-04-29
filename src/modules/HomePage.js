import React, { useState } from 'react';
import Events from './Events';
function HomePage() {
    const [first, setfirst] = useState("");
    const [events, setEvents] = useState();


    return (
        <>
            <header id="pageHeader">
                <nav>
                    <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 96 960 960" width="48"><path d="M220 876h150V626h220v250h150V486L480 291 220 486v390Zm-60 60V456l320-240 320 240v480H530V686H430v250H160Zm320-353Z"/></svg>
                </nav>
                <div id="pageLogo">
                    <h2>ConserveConnect</h2>
                </div>
            </header>
            <section id="eventDisplay">
                <Events title={"Schabraum Park Cleanup"} attending={10} capacity={20} imageSrc={"https://parks.lacounty.gov/wp-content/uploads/2018/06/Edited_PeterFSchabarumRegionalPark-42-of-52-1920x1280.jpg"}></Events>
                <Events title={"Chino Hills Cleanup"} attending={10} capacity={20} imageSrc={"https://parksguidance.com/wp-content/uploads/2022/08/flowers-at-Chino-Hills-State-Park.jpg"}></Events>
                <Events title={"New Event"} attending={10} capacity={20}></Events>
            </section>
        </>
    )
}

export default HomePage;