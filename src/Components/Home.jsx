import './Home.css'
import Header from './Header.jsx'
import Button from './Button.jsx'
import Boy from '../Images/boy.png'
const Home = () => {
    return(
        <div className='main-container'>
            
            <div className='header-component'>
            <Header />
            </div>
            <div className='left'></div>
            <div className='right'></div>

            <div className='contents'>
                <div className='left-content'>
                    <p>Your favourite food gets even better</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis deleniti sed reiciendis doloremque neque, itaque architecto excepturi dignissimos maxime odio repellendus vitae, sunt beatae, at quibusdam nulla ipsa quidem obcaecati?
                    </p>
                    <div>
                        <Button text="Order Now" />
                    </div>
                </div>
                <div className='img-container'>
                        <div className='bg-div'></div>
                        <div className='bg-div2'></div>
                        <img  src={Boy} alt=''/>
                </div>
            </div>
            
        </div>
    );
}
export default Home