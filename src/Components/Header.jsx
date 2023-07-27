import './Header.css'
import Burger from '../Images/burger-img.png'


const Header = () => {
    return(
        <header>
             <div className="logo">
                <img src={Burger} alt=" "/>
             </div>
             <div className="links">
                    <p className='active'>Menu</p>
                    <p>Restaurents</p>
                    <p>Foods</p>
                    <p>Testimonial</p>
             </div>
             <div>
                <button className='login-btn'>Login</button>
             </div>
        </header>
    );
}

export default Header