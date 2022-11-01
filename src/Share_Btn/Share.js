import shareImg from "../Images/_Avatar share button.svg";
import "./Share.css";

const Share = () => {
    return ( 
        <div className="share-container">
            <div className="share-container2" data-tooltip="Share Link">
                <img src={shareImg} alt=""/>
            </div>
        </div>
     );
}
 
export default Share;