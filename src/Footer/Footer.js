import "./Footer.css";
import i4g from "../Images/I4G.png"

const Footer = () => {
    return ( 
        <div className="footer-container">
            <div>
                <span>zuri</span><div id="dot"></div><span>Internship</span>
            </div>
            <div>HNG Internship 9 Frontend Task</div>
            <div className="img-wrapper"><img src={i4g} alt="" /></div>
        </div>
     );
}
 
export default Footer;