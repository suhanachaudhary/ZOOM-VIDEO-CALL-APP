
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

function Landing(){
    const router=useNavigate();
    return(
        <div className="landingPageContainer">
            <nav>
                <div className='navHeader'><h2>Apna Video Call</h2></div>
                <div className='navList'>
                    <p onClick={()=>{
                        router("/dgf456");
                    }}>Join as Guest</p>
                    <p onClick={()=>{
                        router("/auth");
                    }}>Register</p>
                    <div role="button" onClick={()=>{
                        router("/auth");
                    }}><p>Login</p></div>
                </div>
            </nav>
            <div className="landingMainContainer">
                <div>
                    <h1>
                        <span style={{color:"#FF9839"}}>Connect </span>with your loved ones
                    </h1>
                    <p>Cover distance by Apna Video Call</p>
                    <div role="button">
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>

                <div>
                    <img src="/mobile.png" alt="" />
                </div>
            </div>
        </div>
    )
}
export default Landing;