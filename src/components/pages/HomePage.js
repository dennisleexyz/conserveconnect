import React, { useState } from 'react';
import Events from './Events';
import jsonEvents from '../../events.json'
import Filter from './Filter';

function HomePage() {
    const [first, setfirst] = useState("");
    const [events, setEvents] = useState(jsonEvents);


    return (
        <>
            <header id="pageHeader">
                <nav>
                </nav>
                <div id="pageLogo">
                    <h2>ConserveConnect</h2>
                </div>
            </header>
            <section id="eventDisplay">
                {events.map(event => {
                    return <Events title={event.name} description={event.description} attending={event.attending} capacity={event.capacity} imageSrc={event.image}></Events>
                })}
            </section>
            <Filter></Filter>
        </>
    )
}

export default HomePage;