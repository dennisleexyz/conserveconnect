import React, { useEffect, useState } from 'react';
import Events from './Events';
import jsonEvents from '../../events.json'
import Filter from './Filter';
import { intersection, filter, sortTag, user } from '../../lib.js'

function HomePage() {
    const [events, setEvents] = useState(jsonEvents);
    const [miles, setMiles] = useState(30);

    return (
        <>
            <div className='modalScreen' style={{display: "none"}}></div>
            <header id="pageHeader">
                <nav>
                </nav>
                <div id="pageLogo">
                    <h2>conserveConnect.</h2>
                </div>
            </header>
            <section id="eventDisplay">
                {filter(events, miles).map(event => {
                    return <Events title={event.name} tags={event.tags} description={event.description} attending={event.attending} capacity={event.capacity} imageSrc={event.image}></Events>
                })}
            </section>
            <Filter setMiles={setMiles} miles={miles}></Filter>
        </>
    )
}

export default HomePage;
