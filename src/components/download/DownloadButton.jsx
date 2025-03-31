import './DownloadButton.css'
import ICalendarLink from "react-icalendar-link";

export function DownloadButton() {
    const event = {
        title: "Divino Musical",
        startTime: "2025-05-03T21:00:00+02:00",
        endTime: "2025-05-03T23:30:00+02:00",
        location: "Teatro Carani, Sassuolo",
    };

    return (
        <button className="App download-button">
          <ICalendarLink filename="divino.ics" event={event}>Aggiungi al calendario</ICalendarLink>
        </button>
    );
}

export default DownloadButton;
