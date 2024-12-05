
export default function EventItem({src, title, date}) {
    return (
        <>
            <div>
                <img src={src}
                    width="200px" />
            </div>
            <p className="event-content-title">{title}</p>
            <p className="event-content-title-date">{date}</p>
        </>
    );
}