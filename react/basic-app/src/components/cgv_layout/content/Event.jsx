import EventItem from "./EventItem.jsx";
import { useState, useEffect } from "react";

export default function Event() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch("/data/cgv_content.json")
            .then(data=> data.json())
            .then(jsonData => setList(jsonData.eventList))
            .catch();
    }, [])
    

    return (
        <section>
                <div className="content-title-style">
                    <h3 className="content-title-style-font">EVENT</h3>
                    <button className="total-view-button">전체보기 &gt;</button>
                </div>
                <ul className="content-event-list">
                    {list && list.map(event => 
                        <li>
                            <EventItem 
                                src={event.src}
                                title={event.title}
                                date={event.date}
                                />
                        </li>
                    )}
                </ul>
        </section> 
    );
}