/*import Product from "./Product"*/
import Header from "./Header"
import BuyNowButton from "./BuyNowButton"
import "../styles/home.css"




const Home = () => {
    return (
        <div className="container">
            
            
            
            <Header>
            </Header>


            <img src={require("../images/logo.png")} alt="" className="picture"></img> 


            <div className="card">
                <div className="container">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>

            <BuyNowButton></BuyNowButton>


        </div>
    )
}

export default Home

/*

<Product></Product>


/*<img src={require("../images/logo.png")} alt="logo" className="logo"></img> 
            <h1>Company name</h1>

            <nav>
                <ul>
                    <li><a href=""></a>Home</li>
                    <li><a href=""></a>Product</li>
                    <li>About us</li>
                </ul>
            </nav>
*/
