import './Recipies.css'
import Button from './Button'
import Foodimg1 from '../Images/food-img1.png'
import Foodimg2 from '../Images/food-img2.png'
import Foodimg3 from '../Images/food-img3.png'


const Recipies = () => {
    return(
        <div className='recipies-container'>
            <div className='top-bar'>
                    <p className='top-title'>This Week's top recipies</p>
                    <div className='top-btn'>
                        <div> <p className='btn-text'>All</p> </div>
                        <div><p className='btn-text'>Pizza</p></div>
                        <div><p className='btn-text'>Burger</p></div>
                        <div><p className='btn-text'>Sushie</p></div>
                        <div><p className='btn-text'>Biriyani</p></div>
                        <div><p className='btn-text'>Meals</p></div>
                    </div>
            </div>
            <div className='bottom-bar'>
                <div className='round-div'>
                    <img src={Foodimg1} alt=' ' />
                    <p>Cheeseburger</p>
                    <p>$250.00</p>
                </div> 
                <div className='center-div'>
                    <img src={Foodimg2} alt=' ' />
                    <p>Grillfried food</p>
                    <p>$350.00</p>
                </div>
                <div className='round-div'>
                    <img src={Foodimg3} alt=' ' />
                    <p>Hamburgerburger</p>
                    <p>$200.00</p>
                </div>

            </div>
            <Button text = "Order Now"/>
        </div>
    );
}
export default Recipies