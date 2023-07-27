import './Second.css'
import Burger from '../Images/burger-img.png'
import Button from './Button.jsx';
const Second = () => {
    return(
        <div className='second-container'>
            <div className='second-left'>
                    <img src={Burger} alt=' '/>
            </div>
            <div className='second-right'>
                <p>We pride ourselves on making real food from best ingredients</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iure quia dolorum repudiandae numquam! Distinctio cupiditate consequatur velit, ut neque assumenda exercitationem atque modi laborum commodi dolorum voluptate corrupti ipsa. </p>
                <Button text = "Order Now" />
            </div>
            
        </div>
    );
}
export default Second