const Header = () => {
    return (
        <div className="container">
            <img src={require("../images/logo.png")} alt="logo" className="logo"></img>
            <div className="header">
                <h1>Company name</h1>
            
            </div>

            <nav className="navbar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">About</a></li>
                    <a href="#">
                    <img src={require("../images/shopping-cart.png")} alt="cart" className="cart"></img>
                </a>
                </ul>
                

            </nav>

            

        
        
        </div>
        
    )
}
/*<a href="https://www.flaticon.com/free-icons/supermarket" title="supermarket icons">Supermarket icons created by Freepik - Flaticon</a>*/
export default Header
