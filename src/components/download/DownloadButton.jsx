import { saveAs } from 'file-saver'
import iCal from '../../assets/Divino.ics'
import './DownloadButton.css'

export function DownloadButton() {

    const downloadFile = () => {
        const blob = new Blob(['Divino'], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, iCal);
    };

    return <button className="download-button" onClick={downloadFile}>Aggiungi al calendario</button>;
}

export default DownloadButton;
