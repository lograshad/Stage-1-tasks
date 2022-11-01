import './header.css';
import me from "../Images/profile_img.png";
const Header = () => {
    return ( 
        <div className="header-container">
            <div className="profile-img-wrapper">
                <img id="profile__img" src={me} alt="" />
            </div>
            <h2>@AManIsNoOne__</h2>
            <div id="slack">Akintola.rd@gmail.com</div>
        </div>
     );
}
 
export default Header;