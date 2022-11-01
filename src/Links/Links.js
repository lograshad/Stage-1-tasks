import "./Links.css";
import slack from "../Images/slack.png";
import github from "../Images/Icon.png";

const Links = () => {
    return ( 
        <div className="links-container">
            <ul>
                <li><a href="https://twitter.com/AManIsNoOne__" target="_blank">twitter link</a></li>
                <li><a id="btn__zuri" href="https://training.zuri.team/" target="_blank">zuri team</a></li>
                <li><a id="books" href="http://books.zuri.team " target="_blank">zuri books</a></li>
                <li><a id="book__python" href="https://books.zuri.team" ref_id="Abdulrasheed iyanda" target="_blank">python books</a></li>
                <li><a id="pitch" href="https://background.zuri.team" target="_blank">Background Check for Coders</a></li>
                <li><a id="book__design" href="https://books.zuri.team/design-rules" target="_blank">Design Books</a></li>
            </ul>
            <div className="social-icons">
                <div className="imgwrapper"><img src={slack} alt="" /></div>
                <div className="imgwrapper"><img src={github} alt="" /></div>
            </div>
        </div>
     );
}
 
export default Links;
